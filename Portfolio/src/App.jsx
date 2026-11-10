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
import SakhiProject from "./pages/ProjectDetails/SakhiProject";
import FashnovaProject from "./pages/ProjectDetails/FashnovaProject";
import CustomCursor from "./components/CustomCursor";


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

    <div className="min-h-screen bg-[#faf8ff] text-zinc-800 transition-colors duration-300 relative selection:bg-purple-200 selection:text-purple-900">

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
      <CustomCursor />
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
<Route
  path="/projects/sakhi-women-empowerment"
  element={<SakhiProject />}
/>
<Route
  path="/projects/fashnova-ai-fashion-intelligence"
  element={<FashnovaProject />}
/>
<Route
  path="/projects/fashnova"
  element={<FashnovaProject />}
/>
      </Routes>

    </BrowserRouter>

  );

}


export default App;