import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import bgimg from '../../assets/Images/bgimg.webp'; // Import the background image

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant='h1'>
        Encontre um lar para chamar de seu
      </Typography>
      <Typography variant="h5" component="div">
        
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center',
        height: '85vh', // Full viewport height
        width: '100vw', // Full viewport width
        backgroundImage: `url(${bgimg})`, // Use the imported background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ marginLeft: '0' }}> {/* Set left margin to 0 */}
        <Card variant="outlined" sx={{ borderRadius: 0 }}>{card}</Card>
      </Box>
    </Box>
  );
}
