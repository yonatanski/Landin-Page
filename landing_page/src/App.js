import React from 'react';
import './App.css'
import {CTA,Brand,NavBar} from "./Components"
import {Footer,Blog,Possiblity,Features,WhatGPT3,Header} from "./containers"


function App() {
  return (
    <div className="App">
     <div className="gradient__bg" >
     <NavBar />
     <Header />
     </div>
     <Brand />
     <WhatGPT3/>
     <Features/>
     <Possiblity/>
     <CTA/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
