// import Button from "./Button"
// import Header from "./Header"
// import Home from "./Home"


import { useState} from "react";
import Revision from "./Revision"
import Modal from "./modal/Modal";

function App (){
  const [count, setCount] = useState(0);
 
  return(
  <div>
    {/* <Header />
    <Button />
    <Home /> */}
    <Modal />
    <Revision country='Nigeria' language='English' capital='Abuja' />
    <Revision country='Egypt' language='Arabic' capital='Cairo' />
        {/* Count button */}
        <div>
        <p>{count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Count</button>
      </div>
     
  </div>
  )
}

export default App