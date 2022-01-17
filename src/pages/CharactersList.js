import React from 'react'
import { useQuery, gql } from '@apollo/client'
import "./CharactersList.css"

const GET_CHARACTERS = gql`
query {
    characters {
        results {
            id
            name
            image
        }
    }
}
`

export default function CharactersList () {
    
    const {error, loading, data} = useQuery(GET_CHARACTERS);
    console.log(error, loading, data);
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>Something when wrong!</div>

    return (
        <div className="CharacterList">
            {data.characters.results.map(character => {
                return <div>
                    <img src={character.image}/>
                    <h2>{character.name}</h2>

                </div>
            })}
        </div>
    )
}