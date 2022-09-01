import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";
import { Button, IconButton } from "@mui/material";
import { CancelSharp } from "@mui/icons-material";

export const Headers = () => {
  const [sidebar, setsidebar] = useState(false);
  const ShowsideBar = () => setsidebar(!sidebar);

  return (
    <>
      <div className="hidden md:block">
        <div className=" nav-menu flex  ">
          <h1 className="m-2 max-w-lg text-2xl font-bold text-center md:text-4xl md:text-left sm:m-10 ">
            The Logo
          </h1>
          <div className="media text-sm  bg-[#DDE8FE] md:items-center lg:w-1000px md:w-800px md:absolute md-right-20 lg:pr-0 lg:pl-0 md:pr-10 md:pl-10 md:flex md:ml-20 rounded-b-lg absolute right-32 lg:h-32  shadow-lg shadow-500/40 sm:text-sm">
            <ul className="list-none  lg:m-20 lg:gap-12 md:gap-10 list-inside flex decoration-none font-semibold ">
              <li className="underline cursor-pointer lg:my-0 md:my-8">HOME</li>
              <li className="cursor-pointer lg:my-0 md:my-8">
                PLACEMENT STATISTICS
              </li>
              <li className="cursor-pointer lg:my-0 md:my-8">CONTACT US</li>
              <button className="md:bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white md:px-4 border border-blue-500 hover:border-transparent rounded">
                RESUME BUILDER
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="nav-menu flex items-center justify-between h-24 bg-blue-200 ">
          <div className=" ">
            <h1 className="text-2xl font-bold ml-4">The Logo</h1>
          </div>
          <div className="mr-4">
            {
              <IconButton>
                {sidebar ? (
                  <CancelSharp onClick={ShowsideBar} />
                ) : (
                  <MenuIcon onClick={ShowsideBar} />
                )}
              </IconButton>
            }
          </div>
        </div>

        {sidebar ? (
          <aside className=" z-50 w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span className="ml-3 font-semibold">HOME</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap font-semibold ">
                      PLACEMENT STATISTICS
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap font-semibold">
                      RESUME BUILDER
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <Button variant="outlined" color="secondary">
                      RESUME BUILDER
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        ) : null}
      </div>

    </>
  );
};
