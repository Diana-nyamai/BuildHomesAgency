import React from 'react'
import {Grid} from '@material-ui/core'

function Introduction() {
    return (
        <div style={{padding: 50}}>
            <Grid container>
               <Grid xs={12} sm={6}>
                    <h1 style={{maxWidth: 100}}>Architecture with people in mind.</h1>
               </Grid>
               <Grid xs={12} sm={6}>
               
               </Grid>
            </Grid>
        </div>
    )
}

export default Introduction
