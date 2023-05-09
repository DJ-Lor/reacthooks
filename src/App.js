
import './App.css';
import Home from './Pages/Home';
import Inspections from './Pages/Inspections';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Articles from './Pages/Articles';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
          < Route path="/" element={<Home/>} />
          < Route path="/inspections" element={<Inspections/>} />
          < Route path="/articles/:id" element={<Articles/>} />
      </Routes>
    </div>
  );
}

export default App;
