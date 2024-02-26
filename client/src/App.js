import './app.css'
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    //browserRouter provides route to given path 
    //means it will not load screen and directly go to the page
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App;
