import React from 'react'
import image1 from "../images/bg4.jpeg"
import image2 from "../images/bgs10.png"
import Fade from 'react-reveal/Fade';
import Title from './Shared/title';


export default function About() {
    return (







  

        <div className="flex mx-auto justify-end gap-20 pr-8 top-9 bg- bg-gray-200  h-96 w-full   " style={{backgroundImage:`url('${image2}')`}} >

<Fade left>
<div className='my-16 w-96 h-64 p-2  text-justify  text-white  outline-yellow-500 border-4  hover:border-yellow-500 transform transition duration-500 hover:scale-110'>
        
<Title title="Display & Sale of India's Finest Jewellery."/>
        <h1 className='font-bold hover:text-yellow-500 '>"Display & Sale of India's Finest Jewellery."</h1>
        <br/>
        <p className=''>India's Finest Craftsmanship in Gold and Diamond 
        The Dreamland for all Jewellery Loving People. Bengaluru Gears up for an Iconic Jewellery Shopping Destination for 2021. Presenting The Most 
        Treasurable Jewellery from Designers and Jewellery Brands From All Parts of India..
        .The show will follow all Covid Guidelines of the Government.</p>
            
             </div>
        
        <div className='my-16  w-96 hover:border-yellow-500  transform transition duration-500 hover:scale-110  border-4'>
             <img src={image1} width='100%' style={{height:'250px'}} alt="img" />
             </div>
             </Fade>
        
        </div>
        
    )
}
