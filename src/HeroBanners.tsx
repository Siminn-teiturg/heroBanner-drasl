import React, { useState } from "react";
import {
  Box,
  Spacer,
} from "@chakra-ui/react";
import HeroBannerCard from './HeroBannerCard';
import { IHeroBannerProps } from './App';

export default function HeroBanners(props:IHeroBannerProps) {
    const { heroBanner } = props
 
    console.log("HeroBanner: ",heroBanner)
 
 
    return (
      
      <Box  bg="#E5E5E5" p="5" 
            borderRadius="lg" 
            boxShadow="md" m="15" 
            overflow="scroll"
            >
      <Box display="flex" flexDirection="row">
        {heroBanner.map(item => <HeroBannerCard heroBanner={{
           title: item.title,
           description: item.description
          }} {...heroBanner}/>)}
         {/* <HeroBannerCard heroBanner={heroBanner[0]}/> */}
        {/* {heroBanner[0].title}
        {heroBanner[0].description} */}
 
        <Spacer />
      </Box>
      <Box>
      </Box>  
      </Box>
    );
  }
