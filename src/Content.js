import React from 'react';
import CoffeCard from './CoffeCard';
import { Grid } from '@material-ui/core';
import details from './Store';

const Content = () => {
    return (
        <Grid container spacing={3}>
            
                {
                    details.map(info => {
                      return( 
                      <Grid item xs={12} sm={4}>
                      <CoffeCard 
                        title = {info.title}
                        subtitle = {info.price}
                        avatarSrc = {info.avatarUrl}
                        imageSrc = {info.imageUrl}
                        description = {info.description}
                      />
                      </Grid>
                      );  
                    })
                }
            
        </Grid>
    );
};

export default Content;