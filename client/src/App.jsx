import './App.css';

import Navbar from './components/Navbar/Navbar'
import Root from "./routes/Root/Root";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './routes/Home/Home';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Root />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
