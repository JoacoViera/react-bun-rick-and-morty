import React, {useEffect, useState} from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json()
    setData(data.results)
    console.log(data.results);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [page])
  
  if(loading) return <div className="App"><h1>Loading...</h1></div>
  return (
    <div className="App">
    <button className="button" onClick={() =>{
        setLoading(true)
        setPage(page+1)
      }
    }>
        Next Page</button>
    <h2>Page {page}</h2>

      <div className="container">
      {data && data.map((character) => (
        <div className="character" key={character.name}>
          <img src={character.image} alt={character.name} width={200} height={200}/>
          <p style={{textAlign:'center'}}>{character.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
