import {useEffect, useState} from 'react'

function Form(props) {
  const [counter, setCounter] = useState(0)
  
  useEffect(()=>{
    console.log('react render')
    // alert('state counter berubah')
  })

  return (
    <div>
      <h1>Component Form</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      {/* <div>
        <input type="text" value={props.domisili} onChange={(event)=> props.setDomisili(event.target.value)}/> */}
      {/* <input type="text" value={domisili} onChange={(event)=> setDomisili(event.target.value)}/> */}
      {/* </div> */}
    </div>
  )
}

export default Form