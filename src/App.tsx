import { useState } from "react"
import { Navbar } from "./scenes/navbar/Navbar"


export const App = () => {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  return (
    <div className="app bg-gray-100" >
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
    </div>
  )
}


