import { useEffect, useState } from "react"
import { Navbar } from "@/scenes/navbar/Navbar"
import { SelectedPage } from "@/shared/types";
import { Home } from "./scenes/home/Home";
import { Benefits } from "./scenes/benefits/Benefits";



export const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY===0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY!==0)setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  }, []);

  return (
    <div className="app bg-gray-100" >
      <Navbar 
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>  
      <Benefits setSelectedPage={setSelectedPage}/>
      
    </div>
  )
}


