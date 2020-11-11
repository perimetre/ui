import React from 'react';
import './App.css';
import Display from './components/ui/Display';
import Spacing from './components/ui/Spacing';
import Text from './components/ui/Text';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Spacing marginVertical>
          <Display display="flex">
            <Text.Paragraph fontSize="text-5xl" margin>
              Edit <code>src/App.tsx</code> and save to reload.
            </Text.Paragraph>
          </Display>
        </Spacing>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
