import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash(){

  const location = useLocation();

  useEffect(()=>{

    if(location.hash){

      setTimeout(()=>{

        const element = document.querySelector(location.hash);

        if(element){
          element.scrollIntoView({
            behavior: "smooth"
          });
        }

      },300);

    }

  },[location]);


  return null;

}