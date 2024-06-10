import React from 'react';
import Box from '@mui/material/Box';
import image5 from "../../assets/Images/image5.webp";


export default function Row51() {
  return (
    <Box sx={{ mt:7 }}>
      <img 
        src={image5} 
        style={{ 
          maxWidth: '100%', 
          height: '547px', 
          maxHeight: '600px', // Adjust the maximum height as needed
          width: '550px' 
        }} 
      />
    </Box>
  );
}
