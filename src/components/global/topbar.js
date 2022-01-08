import React, { useState } from 'react'
import { Link } from 'gatsby';
import Logo1 from '../../images/Jewelleryshow_Logo.png'
// import '../components/global.css'
import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'


const Topbar = ({handleClick, visible}) => {




    return (
        
<div style= {{backgroundImage:`url('https://wallpaperboat.com/wp-content/uploads/2020/10/30/58767/maroon-03.jpg')`}}>
      <div style={{background:'rgb(84 2 2 / 53%)'}} className="  shadow-md top-0 w-full flex justify-between items-center  p-3">
    
      <div className="">

          <Link to="/"
            aria-label="jewellery"
            title="jewellery"
            className=" "
          >
            <img src={Logo1} className='sm:w-20 w-14' alt="jewellery"   />

          </Link>
</div>
       <div>
       <h1 className=' text-yellow-400  text-sm sm:text-2xl font-bold' >THE JEWELLERY SHOW</h1>

       </div>

          <div className=' '>

              <BsSearch className=' md:white  sm:black hidden text-2xl mr-6'/>
              {
                visible ? <IoMdClose className='sm:hidden block text-2xl ' onClick={()=>handleClick()}/> :
                <GiHamburgerMenu onClick={()=>handleClick()} className='sm:hidden block text-2xl'/>

              }
                </div>



      </div>
      </div>         
          
          
      
    )
}

export default Topbar





