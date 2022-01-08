import React from 'react'
// import homeimg from '../images/bg14.jpg'
import { Link } from 'gatsby';
import '../components/global.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/bgs11.jpg"
import image2 from "../images/bgs12.jpg"
import image3 from "../images/bgs13.jpg"
import image4 from "../images/bgs14.jpg"
import image7 from "../images/bgs22.jpg"
import Footer from '../components/Footer';

export default function Home() {

  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,

    };

    return (

      
        <div className=" h-screen bg-fixed bg-cover bg-center pb-4" >

<div style={{height:'550px'}}>
        <Slider {...settings}>
          <div >
          <img className='h-screen object-cover'  src={image1} width="100%"  alt="img" />

          </div>
          <div>
          <img className='h-screen object-cover' src={image2} width="100%"  alt="img" />

          </div>
          <div>
          <img className='h-screen object-cover' src={image3} width="100%"  alt="img" />

          </div>
          <div>
          <img className='h-screen object-cover' src={image4} width="100%"  alt="img" />

          </div>
         
        </Slider>
      </div>


<div>


<img className='h-screen object-cover p-20 mt-5' src={image7} width="100%"  alt="img" />


</div>

<div className='grid grid-cols-3 gap-3 ' >

 <div>
<img className='h-56 ' src={image7} width="500%"  alt="img" />
</div>

<div>
<img className='h-56  ' src={image7} width="100%"  alt="img" />
</div>
<div>
<img className='h-56' src={image7} width="100%"  alt="img" />
</div>
<div>
<img className='h-56 ' src={image7} width="500%"  alt="img" />
</div>

<div>
<img className='h-56  ' src={image7} width="100%"  alt="img" />
</div>
<div>
<img className='h-56' src={image7} width="100%"  alt="img" />
</div>
</div>



<Footer/>
      </div>



        )
      }
      
      
