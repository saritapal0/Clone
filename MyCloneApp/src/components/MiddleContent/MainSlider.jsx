import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button component
import slider from '../../assets/Images/slider.webp'; // Import the background image
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search'; // Import Search icon

export default function MainSlider() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <img src={slider} alt="Row 1" style={{ width: '100%', height: 'auto' }} />
         <Grid item xs={12} sm={6}>
            <Card sx={{ borderRadius: 0, width: 400 }}>
              <CardContent>
                <Typography variant='h1'>
                  Encontre um lar para chamar de seu
                </Typography>
                <Typography variant="h5" component="div" sx={{ mb: -4.5, mt: 5 }}>
                  Alugar
                </Typography>
                <Typography variant="h5" component="div" sx={{ mx: 10, p: 2 }}>
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
                    sx={{ width: '80%', height: '50px', mt: '40px', p: 3, mx: 3, }} // Adjust width and height of TextField
                    variant="outlined"
                  />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: '80%',
                    height: 50,
                    mt: 8,
                    mb: 2,
                    mx: 2,
                    borderRadius: 10
                  }}
                >
                  Buscar Imoveis
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
   );
}
