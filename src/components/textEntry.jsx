import React,{useState} from 'react'

const server = 'http://localhost:3000'

export default function phoneEntry(props){
  const [to, setTo] = useState('19254465702');
  const [text, setText] = useState('');

  return <form onSubmit={()=>{
      event.preventDefault()
      fetch(server, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'to': to, 'body': text})})
      .then((x)=>{
        console.log('request submitted!')
      })
      .catch(err => console.log("ERROR", err))
    }}>
    <label>To:</label>
    <input type="tel" onChange={(e)=>{
      setTo(e.target.value);
    }}>
    </input>
    <label>Text:</label>
    <input type="text" onChange={(e)=>{
      setText(e.target.value);
    }}>
    </input>
    <button type='submit'>Go!</button>
  </form>
}