import { useState } from 'react';
import lChiki from './assets/l_chiki.png';
import nanaChiki from './assets/nana_chiki.jpg';
import famiChiki from './assets/fami_chiki.jpg';

interface ChickenImage {
  name: 'Lチキ' | 'ナナチキ' | 'ファミチキ';
  src: string;
}

const chickenImages: ChickenImage[] = [
  { name: 'Lチキ', src: lChiki },
  { name: 'ナナチキ', src: nanaChiki },
  { name: 'ファミチキ', src: famiChiki },
];

function App() {
  const [selectedChicken, setSelectedChicken] = useState<ChickenImage | null>(
    null
  );
  const [result, setResult] = useState<string>('');

  const randomChicken = () => {
    const randomIndex = Math.floor(Math.random() * chickenImages.length);
    setSelectedChicken(chickenImages[randomIndex]);
    setResult('');
  };

  const checkGuess = (guess: ChickenImage['name']) => {
    if (guess === selectedChicken?.name) {
      setResult('正解です！');
    } else {
      setResult('不正解です。');
    }
  };

  return (
    <div>
      <h1>これは何チキ？</h1>
      <button onClick={randomChicken}>ゲームスタート</button>
      {selectedChicken && (
        <div>
          <img
            src={selectedChicken.src}
            alt={selectedChicken.name}
            style={{ width: '200px', height: 'auto' }}
          />
          <div>
            {chickenImages.map((chicken) => (
              <button
                key={chicken.name}
                onClick={() => checkGuess(chicken.name)}
              >
                {chicken.name}
              </button>
            ))}
          </div>
          {result && <p>{result}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
