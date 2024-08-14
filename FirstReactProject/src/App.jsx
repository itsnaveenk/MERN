/* eslint-disable react/prop-types */
import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <CustomButton count={count} setCount={setCount}></CustomButton>
    <CustomButton2 count={count} setCount={setCount}></CustomButton2>
    </div>
  )
}

function CustomButton(props) {

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={onClickHandler}>
      Counter+ {props.count}
    </button>
  )
}
function CustomButton2(props) {

  function onClickHandler() {
    props.setCount(props.count - 1);
  }

  return (
    <button onClick={onClickHandler}>
      Counter- {props.count}
    </button>
  )
}

export default App
