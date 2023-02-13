import React, { Component, useState } from "react";
import slides from "../data";
import '../styles/App.css';

const App = (props) => {
  const [index , setIndex] = useState(0)

  const handelRestart = () =>{

    setIndex(0);

  }

  const handelPrev = () =>{
    if(index === 0){
      return;
    }
    setIndex(index-1);
  }

const handelNext = () =>{
   if(index === slides.length-1){
     return;
   }
   setIndex(index+1);
}
  return (
    <>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
      <button data-testid="button-restart" onClick={handelRestart}>Restart</button>
      <button data-testid="button-prev" onClick={handelPrev}>Prev</button>
      <button data-testid="button-next" onClick={handelNext}>Next</button>
    </>
  )
}


export default App;
