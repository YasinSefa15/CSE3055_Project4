import './App.css';
//import bootstrap from "bootstrap"
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"

import NotFound from "./pages/NotFound";
import Stationer from "./pages/stationers";
import Orders from "./pages/orders";
import Sellers from "./pages/Seller";
import Buyers from "./pages/Buyers";
import Items from "./pages/Items";
import UpdateForm from "./pages/UpdateForm";
import CreatePage from "./pages/CreatePage";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Stationer/>}></Route>
      <Route path="/stationers" element={<Stationer/>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/invoices" element={<Invoices/>}></Route>
      <Route path="/stationers/sellers" element={<Sellers/>}></Route>
      <Route path="/stationers/buyers" element={<Buyers/>}></Route>
      <Route path="/items" element={<Items/>}></Route>
      <Route path="/update" element={<UpdateForm/>}></Route>
      <Route path="/create" element={<CreatePage/>}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
    
    
  );
}

export default App;
