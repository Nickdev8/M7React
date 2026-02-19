import styles from "./Pokemon.module.css";
import { useState, useEffect } from "react";

export function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/254")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      });
    fetch("https://pokeapi.co/api/v2/pokemon-species/254")
      .then((response) => response.json())
      .then((data) => {
        newdata = [...pokemon.name, data]
        setPokemon(newdata);
        console.log(data);
      });
  }, []);

  if (pokemon === null) {
    return (
      <section className={styles.pokemon}>
        <h2>Fetching Pokemon</h2>
      </section>
    );
  } else {
    return (
      <ul className={styles.pokemon}>
        <li>
          <p className={styles.name}>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} />
          <p className={styles.id}>{pokemon.id}</p>
          <p className={styles.id}>{pokemon.id}</p>

          <ul>
            {pokemon.types.map((typeObj, index) => (
              <li key={index}>{typeObj.type.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    );
  }
}
