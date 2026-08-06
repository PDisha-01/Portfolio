import { useState } from "react";

import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./components/Experience";
import TechArsenal from "./components/TechArsenal";

function App() {

  const [showIntro, setShowIntro] = useState(true);


  if(showIntro){

    return(
      <IntroScreen
        onFinish={()=>setShowIntro(false)}
      />
    )

  }


  return (

    <div className="bg-black text-white">

      <Navbar />

      <Home />
      
<Experience />
<TechArsenal />

    </div>

  );

}


export default App;