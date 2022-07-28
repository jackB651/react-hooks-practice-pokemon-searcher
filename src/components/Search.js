import React, {useState} from "react";

function Search({findPokemon}) {

  const [search, setSearch] = useState("")
  
  function inputValue(e){
  setSearch(e.target.value)
   return findPokemon(search)
  }
  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange = {inputValue} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
