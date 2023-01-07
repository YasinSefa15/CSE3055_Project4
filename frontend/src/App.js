import './App.css';
//import bootstrap from "bootstrap"
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"

import NotFound from "./pages/NotFound";
import Stationer from "./pages/stationers";
import Orders from "./pages/orders";
import Sellers from "./pages/Seller";
import Buyers from "./pages/Buyers";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Stationer/>}></Route>
      <Route path="/stationers" element={<Stationer/>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/stationers/sellers" element={<Sellers/>}></Route>
      <Route path="/stationers/buyers" element={<Buyers/>}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
    
    
  );
}

export default App;
