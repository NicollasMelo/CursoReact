import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

function App() {

  return (
    <Router>
      <Navbar/>
      
        <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/contato" element={<Contato />} />
                <Route exact path="/empresa" element={<Empresa />} />
            </Routes>
        <Footer/>
    </Router>
  )
}

export default App;
