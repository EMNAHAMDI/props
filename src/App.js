import React from 'react'
import Prof from'./Profile/component/profile.js'

import './App.css';


function App() {
  
    const handleClick = (x )=> {
  
      alert("the name of the profile user is"+x);
    };
   
    return (
      <div className="App">
        <Prof    handleClick={handleClick}
         fullname="Hamdi Emna" bio="Real" 
         profession="Administrateur réseau">
           <img src="./profile/component/ profile/telechargement.jpg" alt="photo"></img></Prof>
      </div>
    );
  }
  
  export default App;
  