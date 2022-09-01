import { Button } from "@mui/material";
import React from "react";
import pic from "./img/bg.png";
import pic2 from "./img/pic2.png";

const Landing = () => {
  return (
    <>
      {" "}
      <div className="landing flex flex-col">
        <h1 className="m-2 max-w-lg font-bold ml-60 mt-10 md:text-4xl sm:text-2xl ">
          <span className="text-blue-900 ">PLACEMENT </span>PORTAL
        </h1>
        <div className="flex">
          <div className="">
            <img src={pic} className="object-cover min lg:w-900px lg:h-96  sm:object-cover " />
          </div>{" "}
        
          
          <div className="google_scan h-400px w-320px bg-[#DDE8FE] flex flex-col gap-10 ml-48 rounded-md shadow-lg shadow-500/40 ">

         
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginTop: "40px", }}
            >
              STUDENT LOGIN
            </Button>
            <Button variant="outlined" color="secondary">
              RECRUTTER LOGIN
            </Button>
            <Button variant="outlined" color="secondary">
              ADMIN LOGIN
            </Button>
            <h1 className="text-center text-xl">Not Signed Yup yet ?</h1>
            <Button variant="outlined" color="secondary">
              SIGN UP
            </Button>
            <div className="flex flex-col ">
              <h2 className="text-xl text-center">Download the App </h2>
              <img className="img_scan h-30 w-48 ml-14  " src={pic2} />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Landing;
