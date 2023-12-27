import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import '../Main/Main.css';

function Main() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ display: 'flex', justifyContent: 'center' ,}}
      >
        <Grid item xs={6}>
          {/* HEADDER */}
          <header style={{ padding: '100px' }}>
            <div>
             
            </div>
            <div className="items">
              <div className="child-items Wireframe"></div>
              <div className="child-items Flows"></div>
              <div className="child-items Designer"></div>
              <div className="child-items Sitemap"></div>
              <div className="child-items StyleGuide"></div>
            </div>
          </header>
          <main>{/* MAIN*/}</main>
        </Grid>
      </Grid>
    </>
  );
}

export default Main;
