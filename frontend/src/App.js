import './App.css';
//import bootstrap from "bootstrap"
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';

import NotFound from "./pages/NotFound";
import Example from "./pages/Example";
import Stationer from "./pages/stationers";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/stationers" element={<Stationer/>}></Route>
      <Route path="/orders" element={<Example/>}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
    
    
  );
}

export default App;
