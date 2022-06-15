// import './App.css';
import Header from "./components/Header/Header"
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";


function App() {
  return (
    <div className="app">
      <SidebarLeft />
      <div className="main">
        <Header />        
        {/* <MainContent /> */}
      </div>
      
      {/* <Section /> */}
    </div>
  );
}

export default App;
