import React from 'react';
import imageSrc from '../../assets/Images/img2.webp'; // Import your image source
import { Box } from '@mui/material';

export default function Row2() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginRight: '600px'}}>
        <img src={imageSrc} alt="Description of the image" style={{ maxWidth: '800px', height: 'auto' }} />

    </Box>
  );
}
