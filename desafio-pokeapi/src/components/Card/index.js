import React, { useEffect, useState } from 'react'

function Card({url}){
const [cardPokemon, setCardPoke] = useState([])

useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(res => setCardPoke(res))
        //.then(res => console.log(res))
},[])

    return (
       <>
        {cardPokemon.map(card => (
            <ul key={card.species.url}>
                <h3>{card.species.name}</h3>
            </ul>
        ))}
       </>
        
    )
    
}

export default Card