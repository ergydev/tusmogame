import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

// Components
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

  useEffect(() => {

    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() =>{
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
        <div>solution - {solution}</div>
        <div>Current Guess - {currentGuess}</div>
        <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
        <Keypad usedKeys ={usedKeys} />
    </div>
    
  )
}