// import Button from "./Button"
// import Header from "./Header"
// import Home from "./Home"


import { useState} from "react";
import Revision from "./Revision"
import Modal from "./modal/Modal";
import UseEffects from "./useEffects/UseEffects";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import {Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";

function App (){
  // const [count, setCount] = useState(0);

  return(
  <div>
    
    {/* <Header />
    <Button />
    <Home /> */}
  
{/*   
    <Modal />
    <Revision country='Nigeria' language='English' capital='Abuja' />
    <Revision country='Egypt' language='Arabic' capital='Cairo' />
      
        <div>
        <p>{count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Count</button>
      </div>
      <UseEffects /> */}

      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
     
  </div>
  )
}

export default App