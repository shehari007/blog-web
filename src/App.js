import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/Login/Login'
import SignupPage from './Pages/Signup/Signup'
;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>  
      </Router>
      <Footer />
    </>
  );
}

export default App;
