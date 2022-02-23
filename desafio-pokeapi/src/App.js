import React, {useEffect, useState} from "react";
import Card from "./components/Card";

export default function App() {
const [pokemons, setPokemons] = useState([])

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302`)
    .then(response => response.json())
    .then(res => setPokemons(res.results))
    //.then(res => console.log(res))

},[])


  return (
    <>
      {pokemons.map(pokemon => (
        <Card url={pokemon.url}/>
      ))}
    </>
  );
}
