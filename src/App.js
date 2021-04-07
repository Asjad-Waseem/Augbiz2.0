import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing page/LandingPage';

import './App.css';

function App() {
  return (

    <Router>
        <div className="App">
   
            <Route exact path = "/" component = {LandingPage} />
     
        </div>
    </Router>
  );
}

export default App;
