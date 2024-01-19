
import './App.css';
import ParticleComponent from './components/particles';
import Timer from './components/timer';
import React from 'react';


function App() {
  

  const handleTimerFinish = () => {
    alert("The Timer is Finished") 
  };


  return (
    <div className="App">
      <ParticleComponent/>
      <Timer onTimerFinish={handleTimerFinish}/>
    </div>
  );
}

export default App;
