import React, { useState } from 'react'
import './Form.css'
const Namform = () => {
  const [Nam,SetNam]=useState("");
  const [fullNam,SetFnam]=useState();
  const inpueve=(event)=>{
    SetNam(event.target.value);
  }
  const Submit=()=>{
    SetFnam(Nam)
  }
  return (
    <div>
    <h1>Hello {fullNam}</h1>
    <input type="text" placeholder="enter your name" value={Nam} onChange={inpueve}/>
    <button onClick={Submit}>Click Me</button>
    </div>
  )
}

export default Namform