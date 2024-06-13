import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';

export default function Row1() {
  return (
    <Grid container spacing={2}>
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
  );
}
