import { Button, Container } from '@mui/material';
import React from 'react';
import pic from './img/bg.png';
import pic2 from './img/pic2.png';

const Landing = () => {
   return (
      <Container className='container' sx={{ display: 'flex', justifyContent: 'space-between', mt: 10 }}>
         <div className='image'>
            <h1 className="font-bold md:text-4xl sm:text-2xl ">
               <span className="text-blue-900 ">PLACEMENT </span>PORTAL
               <img src={pic} className=" object-contain lg:h-96 md:h-80" alt="job-portal" />
               <span className="text-xs">Powered by @The Logo, 2022</span>
            </h1>
         </div>
         <div className="landingPage flex flex-col gap-3">
            <h5 className="h5login text-[#183561] text-2xl font-medium">Login</h5>
            <div
               className="login bg-[#EEF7FF] lg:flex lg:flex-col lg:gap-8 lg:rounded-2xl lg:px-10 lg:py-8 md:flex md:flex-col md:gap-6 md:rounded-2xl md:px-6 md:py-6 sm:flex sm:flex-col sm:gap-4 sm:rounded-2xl sm:px-10 sm:py-10"
               style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
            >
               <Button variant="outlined" color="secondary">
                  STUDENT LOGIN
               </Button>
               <Button variant="outlined" color="secondary">
                  RECRUTTER LOGIN
               </Button>
               <Button variant="outlined" color="secondary">
                  ADMIN LOGIN
               </Button>
               <h1 className="text-center text-[18px]">Not signed up yet?!</h1>
               <Button variant="outlined" color="secondary">
                  SIGN UP
               </Button>
            </div>
         </div>
      </Container>
   );
};

export default Landing;