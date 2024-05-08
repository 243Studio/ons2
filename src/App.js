import './App.css';
import AboutSection from './Components/AboutSection';
import BusinessSection from './Components/BusinessSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import MissionSection from './Components/MissionSection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <BusinessSection/>
      <AboutSection/>
      <MissionSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
