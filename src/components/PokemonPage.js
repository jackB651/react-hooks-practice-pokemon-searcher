import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(resp=>resp.json())
    .then(respObj=>setPokemon(respObj))
  },[])

  const [pokeName, setPokeName] = useState("") 

  const filterPokemon = pokemon.filter((obj)=>{
    return obj.name.toLowerCase().includes(pokeName.toLowerCase())
  })

  function findPokemon(nameInput){
    return setPokeName(nameInput)
  } 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search findPokemon = {findPokemon}/>
      <br />
      <PokemonCollection pokemon = {filterPokemon}/>
    </Container>
  );
}

export default PokemonPage;
