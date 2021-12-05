import {useEffect, useState} from 'react'

function HarryPotter() {
  const [dataHarryPotter, setDataHarryPotter] = useState([])

  useEffect(() =>{
    loadData()
  },[])

  const loadData = async () => {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    console.log('data dari API',data)
    setDataHarryPotter(data)
  }

  console.log('data harry potter',dataHarryPotter)

  return (
    <div>
      <h1>Harry potter API</h1>
      {dataHarryPotter.map((item, key)=>(
        <ul key={key}>
          <li>{item.name}</li>
          <li>{item.house}</li>
        </ul>
      ))}
    </div>
  )
}

export default HarryPotter