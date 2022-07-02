import './app.css';
import { getMenuItemUnstyledUtilityClass } from "@mui/base";
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Root from "./routes/Root/Root";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Navbar />
      <Root />
    </div>
  );
}

export default App;
