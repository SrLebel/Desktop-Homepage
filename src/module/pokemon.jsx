import { useEffect, useState } from "react";
import { TbPokeballOff } from "react-icons/tb";

function getPokemon(){
  let number = Math.floor(Math.random() * (1010 - 1 + 1)) + 1;
  return `https://pokeapi.co/api/v2/pokemon/${number}`;
}

export default function Pokemon () {
  const [pokemonImg, setPokemonImg] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(getPokemon());
        const data = await response.json();
        setPokemonImg(data.sprites.front_default);
        let name = data.name;
        setPokemonName(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase());
      } catch (error) {
        console.log('error:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="pokemon">
      <div className="pokeimg">
        {pokemonImg ? (
          <img src={pokemonImg} alt="Pokemon" height={150}/>
        ) : (
          <TbPokeballOff className="icon"/>
        )}
      </div>
      <div className="poketext">
        {pokemonName ? (
          <p> You Feel Like {pokemonName} Today !! </p>
        ) : (
          <p> ?</p>
        )}
      </div>
    </div>
  );
}
