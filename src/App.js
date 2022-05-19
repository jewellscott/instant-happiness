import './App.css';

import {useState} from 'react';


function App() {

  const [kitty, setKitty] = useState('https://64.media.tumblr.com/d40955822099b07e3b1f89d12508db9a/2abafde055b0fef3-d1/s540x810/725e6f680cb295405cec075b73e7151af325df89.jpg');

  const getKitty = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');

    const json = await res.json();

    setKitty(`${json[0].url}`)

    console.log(json);
  }

  return (
    <div className="container">
      <header>
        <h1>Instant Happiness</h1>
      </header>
      <main>
        <figure>
          <img src={kitty} alt="A cute kitty"/>
        </figure>

        <button
          onClick={getKitty}
          >
            Get a kitty 😻
        </button>
      </main>
      <footer>
         <p>"A meow massages the heart." – Stuart McMillan</p>
      </footer>
    </div>
  );
}

export default App;
