import './App.css';
//import bootstrap from "bootstrap"
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
    
    
  );
}

export default App;
