import React, {useEffect, useState} from "react";

export default function App() {
const [pokemons, setPokemons] = useState([])

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(res => console.log(res))
})

  return (
    <>
      <h3>bulbasaur</h3>
      <span>Grass</span>
      <span>Poison</span>
    </>
  );
}
