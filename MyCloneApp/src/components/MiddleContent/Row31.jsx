import React from 'react';
import Box from '@mui/material/Box';
import image from "../../assets/Images/image.webp";

export default function Row31() {
  return (
    <Box sx={{ paddingLeft: '475px', marginLeft: '220px' }}>
      <img 
        src={image} 
        style={{ 
          maxWidth: '100%', 
          height: '610px', 
          maxHeight: '650px', 
          width: '520px', 
          marginTop: -1000,
          marginBottom:32,
        }} 
      />
    </Box>
  );
}
