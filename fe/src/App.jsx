import React, { useState } from 'react';
import Header from './Header.jsx';
import { PlusIcon, EyeIcon, LightBulbIcon, TelescopeIcon, ArtIcon, MicrophoneIcon, UpArrowIcon, SoundWaveIcon } from './assets';

export default function App() {

  const [isEmpty, setIsEmpty] = useState(true);

  const handleButtonChange = (e) => {
    if (e.target.value !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  return (
    <>
      <Header />

      <h4>What can I help you with?</h4>

      <div className="search-container">
        <div className="search-top">
          <input
            className="search-input"
            placeholder="Ask anything"
            onKeyUp={(e) => { handleButtonChange(e) }}
            autoFocus
          />
        </div>
        <div className="pill-group">
          <div className="icon plus-btn">
            <PlusIcon />
          </div>
          <div className="icon">
            <EyeIcon />
          </div>
          <div className="icon">
            <LightBulbIcon />
          </div>
          <div className="icon">
            <TelescopeIcon />
          </div>
          <div className="icon">
            <ArtIcon />
          </div>
          <div className="icon">
            
          </div>
          <div className="icon-row">
            <div className="icon">
              <MicrophoneIcon />
            </div>

            <div className="icon black">
              {isEmpty ? <SoundWaveIcon /> : <UpArrowIcon />}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        Made with ❤️ by Luke Shimkus
      </footer>
    </>
  );
}