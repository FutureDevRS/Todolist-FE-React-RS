import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Signup from './components/pages/signup';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn}  setLoggedIn={setLoggedIn} userId={userId} />} />
        <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} setUserId={setUserId} />} />
        <Route exact path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
