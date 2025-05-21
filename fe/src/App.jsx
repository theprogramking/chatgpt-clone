import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import * as Icons from './assets';

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
            <Icons.PlusIcon />
          </div>
          <div className="icon">
            <Icons.EyeIcon />
          </div>
          <div className="icon">
            <Icons.LightBulbIcon />
          </div>
          <div className="icon">
            <Icons.TelescopeIcon />
          </div>
          <div className="icon">
            <Icons.ArtIcon />
          </div>
          <div className="icon">
            <Icons.DotsIcon />
          </div>
          <div className="icon-row">
            <div className="icon">
              <Icons.MicrophoneIcon />
            </div>

            <div className="icon black">
              {isEmpty ? <Icons.SoundWaveIcon /> : <Icons.UpArrowIcon />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}