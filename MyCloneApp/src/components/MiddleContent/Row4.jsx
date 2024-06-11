import React from 'react';
import { Box } from '@mui/material';
import Image4 from '../../assets/Images/image4.webp'; // Import your image
import Row41 from '../../components/MiddleContent/Row41';

export default function Row4() {
  return (
    <Box display="flex" alignItems="center" paddingTop="15px"> {/* Adjust the padding top as needed */}
      <img 
        src={Image4} 
        alt="My Image"
        style={{
          height: '535px', // Set the height (adjust as needed)
          width: '475px', // Set the width (adjust as needed)
          marginLeft: '10px',
          // paddingLeft:20
        }} 
      />
      <Row41/>
    </Box>
  );
}
