import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Addjewellery from './pages/addjewellery/Addjewellery';
import Edittitle from './pages/editjewellery/Edittitle';
import Hero from './pages/herosection/Hero';
import CodeState from './context/code/CodeState';
import Alert from './Components/Alert';
// import Aboutedit from './pages/aboutsection/Aboutedit';
// import Title from './pages/titlesection/Title';

function App() {
  return (
    <CodeState>
      
    <div className="">
      <BrowserRouter>
   <Dashboard/>
        <Alert message= "this is the amazing website the coder's"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/addjewellery' element={<Addjewellery/>}/> */}
        <Route path='/edittitle' element={<Edittitle/>}/>
        <Route path='/herosection' element={<Hero/>}/>
        {/* <Route path='/aboutsection' element={<Aboutedit/>}/>
        <Route path='/titlesection' element={<Title/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
    </CodeState>
  );
}

export default App;
