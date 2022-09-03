import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./App.css";
import { CancelSharp } from "@mui/icons-material";
import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

export const Headers = () => {
  const [sidebar, setsidebar] = useState(false);
  const ShowsideBar = () => setsidebar(!sidebar);

  return (
    <>
      <div className="icon block md:hidden lg:hidden sm:hidden">
        <IconButton onClick={() => setsidebar(true)}>
          {" "}
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer open={sidebar} onClose={() => setsidebar(false)}>
        <List>
          <ListItem button divider>
            <ListItemIcon >
              <ListItemText>HOME</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>PLACRMENT STATISTICS</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>CONTACT US</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>    <Button variant="outlined" color="secondary">
              RESUME BUILDER
            </Button></ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      <Container>
        {/* <div className="hidden md:block"> */}
        <div className="h1tag flex justify-between items-center ">
          <h1 className="lg:text-4xl font-bold pt-3 md:text-3xl sm:text-2xl text-2xl">
            The Logo
          </h1>

          <div
            className="header bg-[#DDE8FE] lg:flex items-center gap-6 lg:pt-10 lg:pb-4 lg:px-8 lg:rounded-b-2xl text-[#20416E] lg:text-sm font-bold md:pb-4 md:flex md:px-4 md:pt-8 md:text-xs md:leading-loose md:rounded-b-2xl sm:flex  sm:pt-4 sm:text-xs sm:gap-5 sm:p-4 sm:rounded-b-2xl"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <div className="underline cursor-pointer">HOME </div>
            <div className="cursor-pointer">PLACEMENT STATISTICS</div>
            <div className="cursor-pointer">CONTACT US</div>
            <Button variant="outlined" color="secondary">
              RESUME BUILDER
            </Button>
          </div>
        </div>
        {/* </div> */}
        <div className="hidden">
          <div className="nav-menu flex items-center justify-between h-24 bg-blue-200 ">
            <div className="">
              <h1 className="lg:text-2xl lg:font-bold lg:ml-4 md:text-2xl md:font-bold  md:ml-4  ">
                The Logo
              </h1>
            </div>
            <div className="mr-4">
              {/* {
         
            } */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </Container>
    </>
  );
};
