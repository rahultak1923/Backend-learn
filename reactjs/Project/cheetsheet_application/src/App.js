import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edittitle from './pages/editjewellery/Edittitle';
import Hero from './pages/herosection/Hero';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Dashboard/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edittitle' element={<Edittitle/>}/>
          <Route path='/herosection' element={<Hero/>}/>
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
