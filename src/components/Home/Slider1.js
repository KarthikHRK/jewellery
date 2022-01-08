import React, {useRef} from 'react'
// import homeimg from '../images/bg14.jpg'
import { Link } from 'gatsby';
import '../../components/global.css'
import Slider, {} from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/cswiperimages/p24_files/1254.jpg"
import image2 from "../../images/cswiperimages/p24_files/1354.jpg"
import image3 from "../../images/cswiperimages/p24_files/1234.jpg"
import image4 from "../../images/cswiperimages/p24_files/1254.jpg"
import image5 from "../../images/cswiperimages/p24_files/1354.jpg"
import image6 from "../../images/cswiperimages/p21.jpg"
import image7 from "../../images/cswiperimages/p24_files/1582.jpg"
import Title from '../Shared/title';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function Slider1() {


  const slider = useRef();
  
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        
        
        
        // autoplay: true,
        // autoplaySpeed: 2000,
        
      
        
      };


      console.log(slider);

    return (
        


<div className=' relative'style={{backgroundColor:'#E5E5E5'}} >

<div className='text-3xl  pl-8  ' style={{color:'#530605'}}>
<Title title="Our partners"/>  

</div>
<h1 className='text-sm pl-8  py-6 leading-loose'> Our ultra-luxury private residences include villas, ski chalets and spas,
   as well as a 5-star superior hotel.<br/>
    Each one is chosen for its unique character
    and is designed impeccably in the signature Ultima style.<br/>
   Browse our growing portfolio of destinations below.</h1>



<div className='overflow-hidden item-center ' >



        <Slider {...settings} ref={slider}>
          
          <div  className='  p-10' > 
          <img className='  shadow transform transition duration-500 hover:scale-110 ' src={image1} width="100%"  alt="img" />

          </div>
          <div    className='  p-10' > 
          <img className=' shadow transform transition duration-500 hover:scale-110 ' src={image2} width="100%"  alt="img" />

          </div>
          <div  className='  p-10' > 
          <img className='  shadow transform transition duration-500 hover:scale-110 ' src={image3} width="100%"  alt="img" />

          </div>
          <div  className='  p-10'> 
          <img className='  shadow transform transition duration-500 hover:scale-110 ' src={image4} width="100%"  alt="img" />

          </div>
        
          <div  className='  p-10' > 
          <img className=' shadow transform transition duration-500 hover:scale-110 ' src={image5} width="100%"  alt="img" />

          </div>

          <div  className=' p-10'> 
          <img className=' shadow transform transition duration-500 hover:scale-110 ' src={image6} width="100%"  alt="img" />

          </div>
          <div  className='  p-10'> 
          <img className=' shadow transform transition duration-500 hover:scale-110' src={image7} width="100%"  alt="img" />

          </div>

      
          </Slider>

      <div >
<AiOutlineArrowRight onClick={()=>slider?.current?.slickNext()} className=' bottom-40 right-20 absolute   bg-pink-200  p-4 text-5xl rounded-r-full transform transition duration-500 hover:scale-110 '/>
</div>

<div>
<AiOutlineArrowLeft onClick={()=>slider?.current?.slickPrev()} className=' bottom-40 right-32  absolute bg-pink-200  p-4 text-5xl rounded-l-full transform transition duration-500 hover:scale-110'/>
</div>
   
      </div>
   
      </div>
        )
      }