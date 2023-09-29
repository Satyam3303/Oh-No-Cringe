import React from 'react';

import image from './Assets/oh no cringe.jpg';
import songs from './Assets/oh no cringe.mp3';
import './App.css';

function App() {
  const handlePlay = () => {
    const audio = new Audio(songs);
    audio.play()

    const buttonElement = document.querySelector('.button'); 
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }

    const imageElement = document.querySelector('.App-logo'); 
    if (imageElement) {
      imageElement.style.display = ''; 
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} style={{ display: 'none' }} className="App-logo" alt="logo" />
        <button className='button' onClick={handlePlay}>Save Yourself From cringe</button>
      </header>
    </div>
  );
}

export default App;
