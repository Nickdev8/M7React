import styles from "./Pokemon.module.css";
import { useState, useEffect } from "react";

export function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const pokemontypes
  const pokemontypeslist

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/254")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
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
    pokemontypes = pokemon.types;

    for (let i = 0; i < pokemontypes.length; i++) {
      pokemontypeslist.push(<li key={i}>{pokemontypes[i].type.name}</li>);
    }

    return (
      <ul className={styles.pokemon}>
        <li>
          <p className={styles.name}>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} />
          <p className={styles.id}>{pokemon.id}</p>

          <ul>{pokemontypeslist}</ul>
        </li>
      </ul>
    );
  }
}
