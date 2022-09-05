import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/Login/Login'
import SignupPage from './Pages/Signup/Signup'
import Category from './Pages/Category/Category';
import BlogTitle from './Pages/Title/Title';
import { BrowserRouter , Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/DashHome';
import ProtectedRoute from './ProtectedRoute';
import { Fragment } from 'react';


function App() {
      
  return (
    <>
    
      <BrowserRouter>
        <Header/>    
        <Fragment>
          <Routes>

            <Route exact path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/blogtitle/:title" element={<BlogTitle />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route exact path='/dashboard' element={<ProtectedRoute />}>
              <Route exact path='/dashboard' element={<Dashboard />} />
              </Route>

              <Route exact path='/dashboard/:createNewPost' element={<ProtectedRoute />}>
              <Route exact path='/dashboard/:createNewPost' element={<Dashboard />} />
              </Route>
            
              <Route exact path='/dashboard/:pendingApprovals' element={<ProtectedRoute />}>
              <Route exact path='/dashboard/:pendingApprovals' element={<Dashboard />}/>
              </Route>

          </Routes>
          </Fragment>
        <Footer />
      </BrowserRouter>


    </>
  );
  
}

export default App;
