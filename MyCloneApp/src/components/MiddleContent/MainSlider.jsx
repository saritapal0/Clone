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
      <Typography variant="h5" component="div" sx={{mb:-4.5, mt:5}} >
        Alugar
      </Typography>
      <Typography variant="h5" component="div" sx={{ mx: 10,  p: 2 }}>
        Comprar
      </Typography>
    <Divider />
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center', // Align items vertically
          '& > :not(style)': { m: 1 }, // Apply margin to all children except style tag
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          InputProps={{ // Adding InputProps to TextField
            startAdornment: (
              <SearchIcon sx={{ mr: 1 }} /> // Search icon as start adornment
            ),
          }}
          sx={{ width: 550, height: '50px', marginTop: '100px', p: 3 }} // Adjust width and height of TextField
          variant="outlined"
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: 500,
          height: 50,
          margin: 'auto',
          display: 'block',
          borderRadius: 10,
          mt: 8,
          p: 2, // Adding padding
          mb: 2, // Adding margin bottom
        }}
      >
        Click me
      </Button>

    </CardContent>
  
);


export default function MainSlider() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center',
        height: '125vh', // Full viewport height
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
