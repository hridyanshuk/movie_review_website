import './app.css';
import { getMenuItemUnstyledUtilityClass } from "@mui/base";
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Root from "./routes/Root/Root";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './routes/Auth/Signin';
import Signup from './routes/Auth/Signup';
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
