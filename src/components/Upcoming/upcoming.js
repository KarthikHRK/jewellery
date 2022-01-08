import React from 'react'
import image2 from "../../images/bgs10.png"
import Title from '../Shared/title';
import image3 from "../../images/nextevents/taj.jpg"
import image4 from "../../images/bgs234.jpg"
import image5 from "../../images/nextevents/mysore.jpg"
import Fade from 'react-reveal/Fade';

export default function upcoming() {
    return (
        <div>

       <div className='h-96 bg-neutral-700 opacity-90  bg-no-repeat w-full flex justify-center items-center ' style= {{backgroundImage:`url('${image2}')`} } ></div>


   
       <div className='pl-6 py-8 text-3xl shadow-lg  border-b-4'  style={{color:'#530605'}}>

       <Fade left>  
<Title title="Upcoming events" />
</Fade>  


<div className='flex justify-start  pl-6 py-6'>


<div className=''>
<img className='h-44 ' src={image3} width="100%"  alt="img" />  
</div>

<div className='h-44  flex  justify-center  items-center   w-80' style= {{backgroundImage:`url('${image4}')`} } >
<div >
<h1 className='px-2  text-lg'>Hubballi</h1>
          <p  className='px-2 pb-2 text-sm'>19, 20 & 21 March 2021 
            <br/>Raddisan Blu Plaza Hotel Mysuru</p>
</div>
</div>




<div className='ml-10'>
<img className='h-44 ' src={image5} width="100%"  alt="img" />  
</div>



<div className='h-44  flex   justify-center  items-center  w-80' style= {{backgroundImage:`url('${image4}')`} }> 
<div >
<h1 className='px-2  text-lg'>Mysuru</h1>
          <p  className='px-2 pb-2 text-sm'>19, 20 & 21 March 2021 
            <br/>Raddisan Blu Plaza Hotel Mysuru</p>
</div>
</div>

</div>
</div>

       



  </div>
    )
}
