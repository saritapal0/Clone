import React from 'react';
import Box from '@mui/material/Box';
import image from "../../assets/Images/image.webp";


export default function Row3() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '200px', marginLeft: '150px', mt:"30px" }}>
      <img 
        src={image} 
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
