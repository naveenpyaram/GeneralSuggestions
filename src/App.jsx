
import './App.css'
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeatureManagement from './components/FeatureManagement';
import HomePage from './components/HomePage';
import About from './components/About';
import Documentation from './components/Documentation';
function App() {
  
  return (
    <>
     <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path = "/addfeature/:username" element = {<FeatureManagement />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/documentation" element = {<Documentation />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
