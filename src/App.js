import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the logo from the assets folder
import logo from './assets/logo.png';

function App() {
  const handleVideoClick = () => {
    window.location.href = 'https://ya.ru/'; // Redirect to a different URL on video click
  };

  return (
    <div className="App">
      {/* Header with Logotype from the public folder */}
      <header className="header">
        <img
          src={logo}   // Use the logo from the public folder
          alt="Logo"
          className="logo"
        />
      </header>

      {/* Promo text */}
      <div className="promo-box">
        <p>Promo Text Goes Here</p>
      </div>

      {/* Video Section */}
      <div className="video-container">
        <video
          className="video"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
          onClick={handleVideoClick}
        />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Some Footer Text Here</p>
      </footer>
    </div>
  );
}

export default App;
