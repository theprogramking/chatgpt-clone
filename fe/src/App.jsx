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
          <Icons.PlusIcon />
          <Icons.EyeIcon />
          <Icons.LightBulbIcon />
          <Icons.TelescopeIcon />
          <Icons.ArtIcon />
          <div className="icon-row">
            <Icons.MicrophoneIcon />
            {isEmpty ? <Icons.SoundWaveIcon /> : <Icons.UpArrowIcon />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}