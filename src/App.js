import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route stric exact path="/" element={<CharactersList/>} />
        <Route stric exact path="/:id" element={<Character/>} />
      </Routes>
    </div>
  );
}

export default App;
