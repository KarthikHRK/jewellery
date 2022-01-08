import React from 'react'
import { Link } from 'gatsby';
import Logo1 from '../../images/Jewelleryshow_Logo.png'
import {AiOutlineDown} from 'react-icons/ai'




  const Navbar = ({handleClick, visible}) => {


    const navData = [

      {
path:"/",
title:"Home",
dropdown:false,
chaildnav:[
]

      },

      {
        path:"/",
        title:"Previous show",
        dropdown:true,
        chaildnav:[
          {
            path:"/previousshow",
            title:"Home",
          }
          ]
        
        },

         {
         path:"/",
         title:"Upcoming show",
         dropdown:true,
         chaildnav:[
         {
          path:"/upcomingshow",
          title:"upcomingpage",
          chaildnav:[
          {
           path:"/",
           title:"upcomingpage",
           }
           ]
           }
           ]
           },
           {
           path:"/gallery",
           title:"Gallery",
           dropdown:false,
           chaildnav:[ ]
                
           }, 
           {
            path:"/contact",
            title:"Register",
            dropdown:false,
            chaildnav:[]
                        
            },
    ]


    return (
    


<nav style={{display:visible? 'block' :'block',backgroundColor:'white'}} className={`z-10  top-0  w-full   px-4 py-3`}>



<div className=" flex  justify-start gap-72 ">
<div >

<Link to="/"
  aria-label="jewellery"
  title="jewellery"
  className=" "
>
  <img src={Logo1} className='sm:w-20 w-20 ml-16' alt="jewellery"   />

</Link>
</div>

  <div class="sm:flex m-0 text-slate-600  sm:items-center sm:flex-row flex-col sm:justify-center justify-end gap-14 pb-2 text- text-sm  ">
    {
      navData.map((item,i)=>{
        return <div className='relative' >
        <Link to={item.path}
          aria-label={item.title}
       
          className='flex  items-center gap-2 text-left nav py-2 hover:text-yellow-600 '
        >
           {item.title}

          
        { item.dropdown && <AiOutlineDown className='text-sm pt-1 font-bold '/>}
   
        </Link>
        <div className='p-3 absolute top-10 pt-2 z-20 px-4 shadow cursor-pointer rounded  cnav  bg-white text-slate-900'>

          {
            item.chaildnav.map((citem,k)=>{
              return  <Link to={citem.path}
              aria-label={citem.title}
           
              className='block text-left nav py-2 hover:text-yellow-600 hover:underline underline-offset-8 u decoration-red-700'
            >
               {item.title}
            </Link>
            })
          
          }
        </div>
        </div>
      })    }
  

   </div>

    </div>
  </nav>







       
    )
}
export default Navbar