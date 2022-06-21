import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import WineList from "./WineList";
import WineItem from "./WineItem";
import Router from './components/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
  );
}

export default App;
