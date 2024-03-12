import Homepage from "./Homepage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menubar from "./Menubar/Menubar";
import About from "./About/About"

function App(){
  return( 
    <Router>
    <Menubar /> {/* This will render the Menubar at the top of every page */}
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;