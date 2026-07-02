import React from "react";
import EventList from "./EventList"
import "./event.css"
function App(){
  return(
    <div class = "header">
      <h1>Event booking Website</h1>
      
      <EventList />
    </div>
  );
}
export default App;
   















































































































// import {createContext, useState} from 'react'
// import { useEffect } from 'react'
// import Home from "./pages/Home"
// import "./App.css"
// import{BrowserRouter,Routes,Route}from 'react-router-dom'
// import Header from "./pages/header"
// import About from "./pages/About"
// import Contact from "./pages/Contact"

// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RegisterForm from "./pages/form"; 
// // import Home from "./pages/Home";
// import Product_item from "./pages/products"; 
// import Dress_list from "./pages/dress";
// import Dress_Detail from "./pages/DressDetail";





//  function App(){ 
//   return(
//     <BrowserRouter>
//     <Header/>
// <Routes>
//       <Route path="/"element={<Home/>}></Route> 
//       <Route path="/About"element={<About/>}></Route>
//       <Route path="/Contact"element={<Contact/>}></Route>      
//       <Route path="/Register/Form"element={<RegisterForm/>}></Route>
//       <Route path="/Products"element={<Product_item/>}></Route>
//       <Route path="/dress"element={<Dress_list/>}></Route>
//       <Route path="/Dress/Detail/:id"element={<Dress_Detail/>}></Route>
//    </Routes> 

//  </BrowserRouter>

//   )

// }

// export default App



// export const context=createContext();
// function App(){
//   const [version ,setVersion]=useState(0.22);
//   const [score, setScore]=useState(0);
//   const increase=()=>{setVersion(version+1)}
//   const decrease=()=>{setVersion(version-1)}
//   const reset=()=>{setVersion(0.22)}
//   const push=()=>{setScore(score+1)}
//   useEffect(()=>{
//     console.log("Side Effect");
//   },[version])
//   useEffect(()=>{
//     console.log("Danger");
//   },[])
//    useEffect(()=>{
//     console.log("Success");
//   },)
//   return(
//   <context.Provider value={{name:"react" , version:36}}>
//     <h1>React Functional Component</h1>
//     <p>version :{version}</p>
//     <button onClick={increase}>Increase version</button>
//     <button onClick={reset}>Reset version</button>
//     <button onClick={decrease}>Decrease version</button>
//     <p>Score : {score}</p>
//     <button id="btn" onClick={push}>Push score</button>
//     <Home name="react"version="35"/>
//   </context.Provider>
    
//   )
// }


// export default App
