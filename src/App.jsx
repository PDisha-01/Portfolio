import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Experience from "./components/Experience";
import TechArsenal from "./components/TechArsenal";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PythonMLLab from "./pages/ProjectDetails/PythonMLLab";
import ScrollToHash from "./components/ScrollToHash";
import TrafficOps from "./pages/ProjectDetails/TrafficOps";
import ZenithProject from "./pages/ProjectDetails/ZenithProject";


function MainPortfolio() {

  const [showIntro, setShowIntro] = useState(
    !sessionStorage.getItem("introShown")
  );


  const finishIntro = () => {
    sessionStorage.setItem("introShown", "true");
    setShowIntro(false);
  };


  if(showIntro){

    return(
      <IntroScreen
        onFinish={finishIntro}
      />
    );

  }


  return (

    <div className="bg-black text-white">

      <Navbar />

      <Home />

      <Experience />

      <TechArsenal />

      <Projects />
      <Certifications />
<Contact />
<Footer />
    </div>

  );

}


function App() {

  return (

    <BrowserRouter>
    <ScrollToHash />

      <Routes>

        <Route 
          path="/" 
          element={<MainPortfolio />} 
        />


        <Route 
          path="/projects/python-ml-laboratory-suite"
          element={<PythonMLLab />}
        />
<Route
  path="/projects/trafficops-smart-city-traffic-management-system"
  element={<TrafficOps />}
/>
<Route 
  path="/certifications" 
  element={<Certifications />} 
/>
<Route
  path="/projects/personal-portfolio"
  element={<ZenithProject />}
/>
      </Routes>

    </BrowserRouter>

  );

}


export default App;