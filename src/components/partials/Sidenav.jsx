
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidenav = () => {

// // const Sidenav = ()
  
//   return(

// <div className='w-[20%] h-full border-r-2 border-zinc-400 p-8'>
//     <h1  className='text-2xl text-white font-bold'>
//         <i className ="text-[#6556CD] ri-tv-fill mr-2">   </i>
//            <span className ='text-2xl'>MY Moives</span>

//     </h1>
//        <nav className='flex flex-col text-zinc-400 gap-3 text-l'>

//         <hr />
//         <h1 className='text-white font-semibold text-xl my-10  mb-5'>
//         New Feeds
//         </h1>
//      <Link 
//      to='/trending'
//      className ='hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg'>

//      <i className ="ri-fire-line p-2"></i>Tranding</Link>
     
//      <Link 
//      to="/movie" className ='hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg'>
//      <i className ="ri-movie-line p-2"></i>Moive</Link>
//      <Link
//      to="/tv" 
//       className='hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg'>
//      <i className ="ri-tv-line p-2"></i>Tv Shows</Link>
//      <Link 
//      to="/persondetails" className ='hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg'>
//      <i className ="ri-group-line p-2"></i>People</Link>

//      {/* <Link 
//      to="/person" className ='hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg'>
//      <i className ="ri-group-line p-2"></i>People</Link> */}

//      <Link 
//      to="/popular"
//      className ='hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg'>
//      <i className ="ri-user-star-fill p-2"></i>Popular</Link>
     
  

//     </nav>
    
//     <hr  className ='border-none h-[1px] bg-zinc-400' />
//     <div className ='flex flex-col'>
//     <h1 className ='text-white font-semibold text-xl mt-5'>
//         My movie info
//         </h1>
//      <Link to="/about" className  =' text-zinc-100 hover:bg-[#6556CD] hover:text-white duration-300 p-4 rounded-lg'>
//      <i className ="ri-information-line p-2"></i>About</Link>
//      <Link to="/contect" className=' text-zinc-100 hover:bg-[#6556CD] hover:text-white duration-300  rounded-lg'>
//      <i className="ri-phone-fill p-2"></i>Contact Us</Link>
//      </div>

//     </div>
//   );
// }

// export default Sidenav



import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full border-r-2 border-zinc-500 p-10">
            <h1 className="text-white font-bold text-2xl">
                <i class=" text-[#6556CD] ri-movie-2-line mr-2"></i>
                <span className="text-2xl">Movies</span>
            </h1>

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>

                <Link to="/tranding" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class=" mr-2 ri-fire-fill"></i> Trandings
                </Link>

                <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class=" mr-2 ri-bard-fill"></i> popular
                </Link>

                <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class="mr-2 ri-movie-line"></i> Movies
                </Link>

                <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class="mr-2 ri-tv-2-line"></i> Tv Shows
                </Link>

                <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la p-5">
                    <i class="mr-2 ri-team-fill"></i> People
                </Link>
            </nav>

            <hr className="border-none h-1 bg-zinc-600" />

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">Website Information</h1>

                <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la ">
                    <i class=" mr-2 ri-information-fill"></i> About
                </Link>

                <Link to="/contect" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-la ">
                    <i class=" mr-2 ri-phone-fill"></i> Contect Us
                </Link>
            </nav>
        </div>
    );
};

export default Sidenav;