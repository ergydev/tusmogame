import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess , turn }) {
  return (
    <div>
        <h2>Vous avez 6 tentatives pour trouver le mot</h2>
        {guesses.map((g, i)=> {
            if(turn === i){
                return <Row key={i} currentGuess={currentGuess} />
            }
            return <Row key={i} guess={g} />
        })}
    </div>
  )
}
