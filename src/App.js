import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Contact';
import Details from './Details';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
