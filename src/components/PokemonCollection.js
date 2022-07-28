import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokemonElements = pokemon.map((pokeObj)=>{
    return <PokemonCard key = {pokeObj.id} pokemon = {pokeObj}/>
  })


  return (
    <Card.Group itemsPerRow={6}>
      {pokemonElements}
    </Card.Group>
  );
}

export default PokemonCollection;
