import React, {useState} from "react"
import Home from "../components/Home/Home"
import Navbar from "../components/global/navbar"
import Footer from "../components/Footer"
import TopBar from "../components/global/topbar"
import About from "../components/About"


import Slider1 from "../components/Home/Slider1"
import Comingsoon from "../components/Home/comingsoon"
import Recentshow from "../components/Home/recentshow"

export default function Index() {

    const [isVisible, setIsVisible] = useState(false)

  const handleClick = () =>{


    console.log('hghg');
    setIsVisible(!isVisible)
  }

  return (
  
  
  
  <div>
    {/* <TopBar handleClick={handleClick} visible={isVisible}/> */}
    <Navbar visible={isVisible} />
    <Home/>
    
     
    <Comingsoon/>
    <Recentshow/>

    <Slider1/>

    {/* <About/> */}
    <Footer/>
    
  
    
    </div>

  )
}

