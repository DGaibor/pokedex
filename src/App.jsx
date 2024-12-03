import './App.css';
import {Header} from "./components/header/Header";
import {Pokemon} from "./components/pokemon/Pokemon";

function App() {
  return (
    <div className="app">
        <Header/>
        <Pokemon/>
    </div>
  );
}

export default App;
