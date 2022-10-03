import './App.css';
// import Navbar from './components/nav/Navbar';
import Navbar2 from './components/nav/Navbar2';
import Login from './components/login/Login'
import Logincompany from './components/login/LoginCompany'
import Register from './components/register/Register'
import Registercompany from './components/register/RegisterCompany'
import Homepage from './components/homepage/Homepage'
import Video from './components/video/video'
import Landing from './components/landingPage/Landing';
import HomeCompany from './components/homepage/HomepageCompany';
import Task from './components/task/task'
import Review from './components/review/Review'
import Inputbox from './components/review/Inputbox'
import Comments from './components/review/Comments'
import Comment from './components/review/Comment'
import Checkout from './components/vinternship/Checkout'
import ParticleBackground from './ParticlesBackground'

import { useState } from 'react';

// To manage routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [ user, setLoginUser] = useState({})

  return (
    // <div className='Background'>
    <>
      <Router>
        <Routes>
          {
              user && user._id ? <Route exact path="/" element={<Homepage setLoginUser={setLoginUser} />} /> : <Route exact path="/" element={<Landing />} />
          }
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/loginCompany" element={<Logincompany setLoginUser={setLoginUser} />} />
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/registerCompany" element={<Registercompany />}/>
          <Route exact path="/video" element={<Video />}/>
          <Route exact path="/landing" element={<Landing />}/>
          <Route exact path="/home" element={<Homepage />}/>
          <Route exact path="/homecompany" element={<HomeCompany />}/>
          <Route exact path="/task" element={<Task />}/>
          <Route exact path="/review" element={<Review />}/>
          <Route exact path="/inputbox" element={<Inputbox />}/>
          <Route exact path="/comments" element={<Comments />}/>
          <Route exact path="/comment" element={<Comment />}/>
          <Route exact path="/checkout" element={<Checkout />}/>
          {/* <Route exact path="/task" element={<task />}/> */}
          {/* <Route exact path="/home" element={<Homepage />}/> */}
        </Routes>
      </Router>
      </>
    // </div>
  );
}

export default App;
