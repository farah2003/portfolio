import React from "react";
import { NavBar,Header ,Skills,Footer,Projects} from './component/index.tsx';
import './app.css'
function App() {
  return <div className='App'>
    <div className="main">
    <NavBar/>
    <Header/>
    </div>
    <div className="content">
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
    
  </div>;
}

export default App;
