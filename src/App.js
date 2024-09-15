import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the logo from the assets folder
import logo from './assets/logo.png';
import video from './assets/BigBuckBunny_.mp4';

function App() {
  // UseEffect hook to add zoom prevention
  useEffect(() => {
    // Prevent zoom via Ctrl + +/- or mouse wheel on desktop
    const preventZoom = (event) => {
      if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.type === 'wheel')) {
        event.preventDefault();
      }
    };

    // Prevent pinch zooming on mobile
    const preventPinchZoom = (event) => {
      if (event.touches && event.touches.length > 1) {
        event.preventDefault();
      }
    };

    // Add event listeners
    window.addEventListener('keydown', preventZoom);
    window.addEventListener('wheel', preventZoom, { passive: false });  // Handle zoom via mouse wheel
    window.addEventListener('touchmove', preventPinchZoom, { passive: false });

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('keydown', preventZoom);
      window.removeEventListener('wheel', preventZoom);
      window.removeEventListener('touchmove', preventPinchZoom);
    };
  }, []);

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
          src={video}  // Use the imported video file
          autoPlay
          loop
          muted
          onClick={handleVideoClick}
        />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Some Footer Text Here!</p>
      </footer>
    </div>
  );
}

export default App;
