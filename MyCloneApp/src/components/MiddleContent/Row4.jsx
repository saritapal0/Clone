import React from 'react';
import { Box } from '@mui/material';
import Image4 from '../../assets/Images/image4.webp'; // Import your image
import Row41 from '../../components/MiddleContent/Row41';

export default function Row4() {
  return (
    <Box display="flex" alignItems="center" paddingTop="25px"> {/* Adjust the padding top as needed */}
      <img 
        src={Image4} 
        alt="My Image"
        style={{
          height: '535px', // Set the height (adjust as needed)
          width: '500px', // Set the width (adjust as needed)
          marginRight: '-5px', // Add some margin to the right for spacing
          marginLeft: 'auto', // Move the image to the right
        }} 
      />
      <Row41/>
    </Box>
  );
}
