import styles from "./Pokemon.module.css";
import { useState, useEffect } from "react";

export function Pokemon() {
  const [pokemonBase, setPokemonBase] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);

  const id = 254;
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPokemonBase(data);
      });

    fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
      .then((response) => response.json())
      .then((speciesData) => {
        setPokemonSpecies(speciesData);
      });
  }, []);

  if (!pokemonBase || !pokemonSpecies) {
    return (
      <section className={styles.pokemon}>
        <h2>Fetching Pokemon...</h2>
      </section>
    );
  } else {
    const pokemon = { ...pokemonBase, ...pokemonSpecies };
    const flavorText = pokemon.flavor_text_entries[0].flavor_text.replace(/\f/g,"",);

    return (
      <section className={styles.pokemon}>
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
      </section>
    );
  }
}
