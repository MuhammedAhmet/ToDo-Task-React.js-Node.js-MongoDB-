import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from "./Pages/HomePage"
import { useState } from 'react';


const App = () => {

  const [user, setLoginUser] = useState({})

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element=
          {
            user && user._id ? <Home  User = {user}/> : <Login setLoginUser={setLoginUser}/>
          }/>
          <Route path="/register"  element={<Register/>} />
          <Route path="/login"  element={<Login setLoginUser={setLoginUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
