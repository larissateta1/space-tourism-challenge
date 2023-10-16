import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from './pages/HomePage';
import Destinations from './pages/Destinations';
import Technology from './pages/Technology';
// import Crew from './pages/Crew';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destinations/>} />
        <Route path='/technology' element={<Technology/>}/>
        {/* <Route path='/crew' element={<Crew/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
