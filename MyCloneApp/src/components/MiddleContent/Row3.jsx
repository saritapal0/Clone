import React from 'react';
import Box from '@mui/material/Box';
import image from "../../assets/Images/image.webp";

export default function Row3() {
  return (
    <Box sx={{ backgroundColor: '#f3e5f5', width: '850px', height: '515px' }}>
      <Box>
      <img src={image} alt="Description of the image" style={{ maxWidth: '100%', height: '517px', marginLeft:"90%"}} />
     </Box>
    </Box>
  );
}
