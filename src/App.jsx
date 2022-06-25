import {React, useEffect} from "react";
import UI from "./Components/UI/UI";

const App = () => {
 
  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

}, []);

  return(
    <> 
      <UI />
    </>
    ) 
};

export default App;
