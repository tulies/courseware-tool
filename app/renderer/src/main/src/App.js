import logo from './logo.svg';
import './App.css';
// import {ipcRenderer} from 'electron'
// const {ipcRenderer} = window.require('electron')
import {Button} from 'antd'
function App() {
  // console.log(ipcRenderer)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Learn React</Button>
      </header>
    </div>
  );
}

export default App;
