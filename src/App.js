import React, { useState } from "react";
import "./App.css";
import Drag from "./Components/Main/DragAndDrop/Drag";
import Main from "./Components/Main/Main";
import MiniDrawer from "./Components/Main/SideBar/SideBar";
import Button from "@mui/material/Button";
import SignUp from "./Components/SignUp/SignUp";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



function App() {
const [darkMode,setDarkMode]=useState(true)
const darkTheme = createTheme({
  palette: {
    mode:darkMode ? 'dark':'light',
  },
});
  return (
    
      <>   
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <h1>hello world </h1>
      
      {/* <SignUp/> */}
      <Main />
      <MiniDrawer checked={darkMode} change={()=>setDarkMode(!darkMode)}/>
       </ThemeProvider>


  
      </>
      
    
   
  );
}
export default App;
