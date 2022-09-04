import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>Félicitaions</h1>
                <p className='solution'>{solution}</p>
                <p>Vous avez trouvé le mot en {turn} tours!</p>
                <button><a href='/'>Nouvelle partie</a></button>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Arhg... Dommage</h1>
                <p className='solution'>Le mot était {solution}</p>
                <p>Vous ferez mieux la prochaine fois!</p>
                <button><a href='/'>Nouvelle partie</a></button>
            </div>
        )}
    </div>
  )
}
