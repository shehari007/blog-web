import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/Login/Login'
import SignupPage from './Pages/Signup/Signup'
import Category from './Pages/Category/Category';
import BlogTitle from './Pages/Title/Title';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/DashHome';
import ProtectedRoute from './ProtectedRoute';
import { Fragment } from 'react';
import Profile from './Pages/Profile/Profile';
import Userposts from './Pages/UserPosts/UserPosts'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header />
        <Fragment>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/blogtitle/:title" element={<BlogTitle />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/userposts/:username" element={<Userposts />} />

            <Route exact path='/dashboard/:Dashboard' element={<ProtectedRoute />}>
              <Route exact path='/dashboard/:Dashboard' element={<Dashboard />} />
            </Route>

            

          </Routes>
        </Fragment>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App;
