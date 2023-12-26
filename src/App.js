import './App.css';
import Drag from './Components/Main/DragAndDrop/Drag';
import Main from './Components/Main/Main';
import MiniDrawer from './Components/Main/SideBar/SideBar';
import SignUp from './Components/SignUp/SignUp';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import { dark } from '@mui/material/styles/createPalette';

function App() {
  const [mode,setMode]=useState(true)
  const theme = createTheme({
    palette: {
      mode: mode?'dark':"light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h1>hello world </h1>
        {/* <SignUp/> */}
        <Main />
        <MiniDrawer check={theme} change={()=>setMode(!dark)}/>
      </div>
    </ThemeProvider>
  );
}
export default App;
