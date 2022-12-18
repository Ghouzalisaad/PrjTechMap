
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




import Home from './components/acceuil';
import Reverse from './components/reverse';
import Counteur from './components/counteur';






class App extends React.Component{
  render() {
    return (
      <div className="container">
        
        <Router>
          <Routes>
            <Route path="/acceuil" element={<Home />}/> 
            <Route path="/counteur" element={<Counteur />}/>
            <Route path="/reverse" element={<Reverse />} />
          </Routes>
         
        </Router>
        
      </div>
    );
  }

}
export default App