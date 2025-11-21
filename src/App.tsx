import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Professional from './pages/Professional';
import Graduate from './pages/Graduate';
import Undergraduate from './pages/Undergraduate';
import Personal from './pages/Personal';
import Publications from './pages/Publications';
import Presentations from './pages/Presentations';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/graduate" element={<Graduate />} />
            <Route path="/undergraduate" element={<Undergraduate />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
