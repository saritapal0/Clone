import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button component
import bgimg from '../../assets/Images/bgimg.webp'; // Import the background image
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search'; // Import Search icon

const card = (
  <CardContent>
    <Typography variant='h1'>
      Encontre um lar para chamar de seu
    </Typography>
    <Typography variant="h5" component="div" sx={{mb:-4.5, mt:5}}>
      Alugar
    </Typography>
    <Typography variant="h5" component="div" sx={{mx: 10, p: 2}}>
      Comprar
    </Typography>
    <Divider />
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left', // Align items vertically
        '& > :not(style)': { m: 1 }, // Apply margin to all children except style tag
      }}
    >
      <TextField
        id="outlined-basic"
        InputProps={{ // Adding InputProps to TextField
          startAdornment: (
            <SearchIcon sx={{ mr: 1 }} /> // Search icon as start adornment
          ),
        }}
        sx={{ width: 500, height: '50px', marginTop: '100px', p: 3 }} // Adjust width and height of TextField
        variant="outlined"
      />
    </Box>
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: 450,
        height: 50,
        margin: 'auto',
        display: 'block',
        borderRadius: 10,
        mt: 8,
        p: 2, // Adding padding
        mb: 2, // Adding margin bottom
      }}
    >
     Buscar Imoveis
 </Button>
  </CardContent>
);

export default function MainSlider() {
  return (
    
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start', // Align items to the left
        alignItems: 'center',
        height: '110vh', // Full viewport height
        width: '100vw', // Full viewport width
        backgroundImage: `url(${bgimg})`, // Use the imported background image
        backgroundSize: 'cover',
        backgroundPosition: 'left', // Move background image to the left side
      }}
    >
      <Card variant="outlined" sx={{ borderRadius: 0 }}>{card}</Card>
    </Box>
  );
}
