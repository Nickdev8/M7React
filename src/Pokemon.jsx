import styles from "./Pokemon.module.css";
import { useState, useEffect } from "react";

export function Pokemon() {
  const [query, setQuery] = useState("254");
  const [searchValue, setSearchValue] = useState("254");
  const [pokemonBase, setPokemonBase] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setPokemonBase(null);
    setPokemonSpecies(null);

    fetch("https://pokeapi.co/api/v2/pokemon/" + searchValue)
      .then((response) => response.json())
      .then((data) => {
        if (!data.name || !data.sprites) {
          throw new Error("Pokemon not found");
        }
        setPokemonBase(data);
      })
      .catch(() => {
        setError("Pokemon not found.");
        setLoading(false);
      });

    fetch("https://pokeapi.co/api/v2/pokemon-species/" + searchValue)
      .then((response) => response.json())
      .then((speciesData) => {
        if (!speciesData.flavor_text_entries) {
          throw new Error("Pokemon not found");
        }
        setPokemonSpecies(speciesData);
      })
      .catch(() => {
        setError("Pokemon not found.");
        setLoading(false);
      });
  }, [searchValue]);

  useEffect(() => {
    if (pokemonBase && pokemonSpecies) {
      setLoading(false);
    }
  }, [pokemonBase, pokemonSpecies]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = query.trim().toLowerCase();
    if (!value) {
      return;
    }
    setSearchValue(value);
  };

  const pokemon = pokemonBase && pokemonSpecies ? { ...pokemonBase, ...pokemonSpecies } : null;
  const flavorText =
    pokemon?.flavor_text_entries
      ?.find((entry) => entry.language.name === "en")
      ?.flavor_text.replace(/[\f\n]/g, " ") ?? "No description available.";

  return (
    <section className={styles.pokemon}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name or id"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className={styles.status}>Loading...</p>}
      {!loading && error && <p className={styles.status}>{error}</p>}

      {pokemon && (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>#{pokemon.id}</p>
          <p>{flavorText}</p>

          <h3>Types</h3>
          <ul>
            {pokemon.types.map((typeObj) => (
              <li key={typeObj.type.name}>{typeObj.type.name}</li>
            ))}
          </ul>

          <h3>Moves</h3>
          <ul className={styles.moves}>
            {pokemon.moves.map((moveObj) => (
              <li key={moveObj.move.name}>{moveObj.move.name}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
