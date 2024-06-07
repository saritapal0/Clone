import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import Image4 from '../../assets/Images/image4.webp'; // Import your image
import Row41 from '../../components/MiddleContent/Row41';

export default function Row4() {
  return (
    <Box display="flex" alignItems="center">
      <img 
        src={Image4} 
        alt="My Image"
        style={{
          height: '528px', // Set the height (adjust as needed)
          width: '450px', // Set the width (adjust as needed)
          marginRight: '0px' // Add some margin to the right for spacing
        }} 
      />
      <Row41/>
    </Box>
  );
}
