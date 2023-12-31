

import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    //browserRouter provides route to given path 
    //means it will not load screen and directly go to the page
   <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
