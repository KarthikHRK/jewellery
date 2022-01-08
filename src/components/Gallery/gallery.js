import React from 'react'
import image7 from "../../images/bgs22.jpg"
import Title from '../Shared/title';
import image3 from "../../images/nextevents/taj.jpg"
import image4 from "../../images/bgs234.jpg"
import image5 from "../../images/nextevents/mysore.jpg"
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";



export default function Gallery() {







  return (
    


<div className= '' style={{ width:'100%',    }}  >
<div className='h-[290px] flex justify-start items-center pl-10  'style={{background:'#530605'}}   > 
<Fade left>
  <div>
<h1 className='text-3xl font-bold  text-yellow-600 ml-8   '>Gallery
<hr className='w-[200px] block mx-auto  border-0 h-1 bg-yellow-600 rounded'/></h1>
</div>
</Fade>


  </div>

 
<div className='flex justify-center  pl-6 my-8'>


<div className=''>
<img className='h-32 ' src={image3} width="100%"  alt="img" />  
</div>

<div className=''>
<img className='h-32 ' src={image5} width="100%"  alt="img" />  
</div>

<div className=''>
<img className='h-32 ' src={image3} width="100%"  alt="img" />  
</div>



<div className=''>
<img className='h-32 ' src={image5} width="100%"  alt="img" />  
</div>

<div className=''>
<img className='h-32 ' src={image5} width="100%"  alt="img" />  
</div>



</div>



<div className='text-3xl my-6  text-center'  style={{color:'#530605'}}>
<Title title="Shivamogga 2020" />
</div>


<div className='grid grid-cols-3 gap-1 w-[80%] ' >

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
<div>
<img className='h-56' src={image7} width="100%"  alt="img" />
</div>
<div>
<img className='h-56' src={image7} width="100%"  alt="img" />
</div>
<div>
<img className='h-56' src={image7} width="100%"  alt="img" />
</div>

<div>
<img className='h-56' src={image7} width="100%"  alt="img" />
</div>












</div>














      
    </div>
  )
}

