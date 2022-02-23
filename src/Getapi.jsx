import React, { useEffect, useState } from 'react'
import { Table, Row, Col, Button,Form } from 'react-bootstrap';

const Getapi = () => {
  const [data, setData] = useState([])
  const [name, setNam] = useState("");
  const [classt, setClas] = useState("");
  const [city, setCit] = useState("");
  const [id,setUserid] = useState(null);
  useEffect(() => {
    getApi()
  }, [])
  function getApi() {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((resp) => {
        setData(resp)
        setNam(resp[0].name)
        setClas(resp[0].classt)
        setCit(resp[0].city)
        setUserid(resp[0].id)
      })
    })
  }
  function deleteUser(id) {
    fetch("http://localhost:3000/users/" + id, {
      method: 'DELETE'
    }).then((res) => {
      res.json().then((resp) => {
        getApi()
      })
    })
  }
  function selectUser(id) {
    let item = data[id - 1];
    setNam(item.name)
    setClas(item.classt)
    setCit(item.city)
    setUserid(item.id)
  }
  function updateUser(){
    let item = {name,classt,city}
    fetch("http://localhost:3000/users/" + id, {
      method: 'Put',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((res) => {
      res.json().then((resp) => {
        getApi()
      })
    })
  }
  return (
    <>
      <h1>Delete/Edit/Get api</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>City</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.classt}</td>
                <td>{item.city}</td>
                <td><Button variant="danger" onClick={() => deleteUser(item.id)}>Delete</Button></td>
                <td><Button variant="primary" onClick={() => selectUser(item.id)}>Update</Button></td>
              </tr>
            )
          }

        </tbody>
      </Table>
      <Form>
        <tr>
          <td><Form.Control type="text" value={name} onChange={(e)=>setNam(e.target.value)} /></td>
          <td><Form.Control type="text" value={classt} onChange={(e)=>setClas(e.target.value)} /></td>
          <td><Form.Control type="text" value={city} onChange={(e)=>setCit(e.target.value)} /></td>
          <td><Button variant="warning" onClick={updateUser}>SaveUser</Button></td>
        </tr>
       
      </Form>
    </>
  )
}

export default Getapi