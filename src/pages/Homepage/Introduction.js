import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import prop2 from "../../assets/images/property/prop2.png"

function Introduction() {
    return (
        <div style={{padding: 50}}>
            <Grid container>
               <Grid xs={12} sm={6}>
                    <h1 style={{maxWidth: 450}}>Architecture with people in mind.</h1>
                    <Typography>Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, 
                    lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                     Duis sed odio sit amet nibh vulpu tate cursus amet lorem mauris.</Typography>
               </Grid>
               <Grid xs={12} sm={6}>
               <div style={{}}><img  src={prop2} alt="property"/></div>
               
               </Grid>
            </Grid>
        </div>
    )
}

export default Introduction
