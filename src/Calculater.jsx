import React from 'react';
import {add,mul,sub,div} from './Fun.jsx';
const Calculater = () => {
  return (
    <>
      <ul>
          <li>Sum of two no is {add(10,20)} </li>
          <li>Subtract of two no is {sub(10,5)}</li>
          <li>Multiply of two no is {mul(10,5)} </li>
          <li>Division of two no is {div(4,2)}</li>
      </ul>
    </>
  )
}

export default Calculater;