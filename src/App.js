import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { HomePage } from './Components/HomePage';
import { SideBar } from './Components/SideBar';

function App() {

  const [sideOpen, setSideOpen] = useState(false);

  const handleSideOpen = () => {
    setSideOpen(sideOpen => !sideOpen);
  }

  return (
    <div className="App">
        <Header onSideOpen={handleSideOpen} />
        <div className="page">
          {
            sideOpen && <SideBar />
          }
          <HomePage withSide={sideOpen} />
        </div>
    </div>
  );
}

export default App;
