import React from 'react'
import image2 from "../../images/bgs126.jpg"
import image1 from "../../images/bgs8.jpg"
import Fade from 'react-reveal/Fade';
import Countdown, {zeroPad} from 'react-countdown';
import Flip from 'react-reveal/Flip';
import Spin from 'react-reveal/Spin';


export default function Comingsoon() {
    return (

       
        <div  className='flex justify-center     '>

<Fade left>      
<div className='shadow w-[100%]  ' >

<img src={image1} width='100%' style={{height:'290px'}} alt="img" />

</div>

</Fade> 




<Fade right> 

<div className= '' style={{ width:'100%',    }}  >
<div className='h-[290px] 'style={{background:'#530605'}}   >   



<Countdown

    date= {('2022-02-01T01:02:03')}
 
    renderer={({days,hours,minutes,seconds}) => {
        console.log();
        return <div className='flex justify-center items-center w-full h-full text-5xl '>    
<div >

<div>
   
<h1 className='text-[25px]  mb-4 pl-2 text-white  '>Upcoming jewellery show </h1>


    </div>

<hr className='w-20 block mx-auto my-5 border-0 h-1 bg-white rounded'/>
<Spin>
<div className='flex justify-center gap-5 '>
          
          
        <span className='p-1  rounded-lg  text-center text-[40px] ' style={{background:'#E1CE8A', color:'#530605'   }}  >{days} <br/> <div className='text-[13px] text-center'>   Days </div> </span>
        <span className='p-1  rounded-lg  text-center text-[40px] '  style={{background:'#E1CE8A', color:'#530605'   }} >{zeroPad(hours)}<br/> <div className='text-[13px] text-center'>   Hours </div> </span>
        <span className='p-1  rounded-lg  text-center text-[40px]'  style={{background:'#E1CE8A', color:'#530605'   }} >{minutes}<br/> <div className='text-[13px] text-center'>   Minutes </div> </span>
        <span className='p-1  rounded-lg  text-center text-[40px]'  style={{background:'#E1CE8A', color:'#530605'   }} >{seconds}<br/> <div className='text-[13px] text-center'>   Seconds </div> </span>
        
        
        
        
        </div>
        </Spin>
        
        


<div>
<Flip>
        <p className=' text-[40px]  my-5 text-center text-white' >Bengaluru</p>
        </Flip>
        </div>
        </div>
        
        </div>
        }}/>,

        </div>



</div>


</Fade> 


</div>
            
   
    )
}
