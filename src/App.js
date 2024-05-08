import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { HashRouter, Route, Routes } from "react-router-dom";
import ContactPage from './Pages/ContactPage';
import CallCenter from './Pages/CallCenter';
import Security from './Pages/Security';
import DispatchBusiness from './Pages/DispatchBusiness';
import Distribution from './Pages/Distribution';
import Sales from './Pages/Sales';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import PersonalData from './Pages/PersonalData';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ContactPage" element={<ContactPage/>}/>
          <Route path="/CallCenter" element={<CallCenter/>}/>
          <Route path="/Distribution" element={<Distribution/>}/>
          <Route path="/Security" element={<Security/>}/>
          <Route path="/DispatchBusiness" element={<DispatchBusiness/>}/>
          <Route path="/Sales" element={<Sales/>}/>
          <Route path="/PersonalData" element={<PersonalData/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
