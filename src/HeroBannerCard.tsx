import React, { useState } from "react";
import {
    Flex,
    SimpleGrid,
    Button,
    Box,
    Stack,
    Checkbox,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Text,
    Textarea,
    Input
  } from "@chakra-ui/react";
 
 
interface IHeroBannerProps {
    heroBanner: {
        title: string;
        description: string;
    }
  }
 
 
 
export default function HeroBannerCard(props: IHeroBannerProps) {
    const { heroBanner } = props
 
    return (
 
        <Box>
           <Box>Title: {heroBanner.title}</Box> 
           <Box>Description: {heroBanner.description}</Box>
 
        </Box>
 
    );
}
