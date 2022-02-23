import React, { useState } from 'react'

const Postapi = () => {
const [name,Setname]=useState("");
const [classt,Setclass]=useState("");
const [city,Setcity]=useState("");

function saveUser()
{
   //console.log(name,clas,city);
   let data={name,classt,city};
   fetch("http://localhost:3000/users",{ method:'POST', headers:{'Accept':'application/json', 'content-Type':'application/json' },
     body:JSON.stringify(data)
   }).then((res)=>{
   //console.log("result",res);
   res.json().then((resp)=>{
   // console.log("resp",resp);
   
   })
   })
}

  return (
    <>
    <h1>Post api</h1>
    <input type="text" value={name} onChange={(e)=>{Setname(e.target.value)}}  name="name"/><br/><br/>
    <input type="text" value={classt} onChange={(e)=>{Setclass(e.target.value)}} name="class"/><br/><br/>
    <input type="text" value ={city} onChange={(e)=>{Setcity(e.target.value)}} name="city"/><br/><br/>
    <button type="button" onClick={saveUser}>Save</button>
    </>
  )
}

export default Postapi