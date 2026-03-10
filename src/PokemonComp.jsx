import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PokemonComp() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.sprites.front_default} />

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}

export default PokemonComp;