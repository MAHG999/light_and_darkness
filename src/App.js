import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const ThemesStyles = {
  dark:{
    backgrround:'#282c34',
    textColor: 'white'
  },
  ligh:{
    backgrround:'white',
    textColor: '#282c34'
  }
}

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => theme === 'dark' ? setTheme('ligh') : setTheme('dark');
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: ThemesStyles[theme].backgrround, color: ThemesStyles[theme].textColor}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current Theme is "{theme}"
        </p>
        <button onClick={toggleTheme}>
          Toggle Button
        </button>
      </header>
    </div>
  );
}

export default App;
