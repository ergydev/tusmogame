import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";


function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 25  - 'Math.floor' give a decimal number - Math.random give a random number that we multiply with array length (json file)
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Tus-Mo</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
