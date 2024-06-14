import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import slider from '../../assets/Images/slider.webp';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function MainSlider() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <img src={slider} style={{ width: '100vw', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} sx={{ justifyContent: 'flex-start'}}> {/* Adjusted justifyContent */}
        <Card sx={{ borderRadius: 0, width: 400, display: "flex", flexDirection: "column", alignItems: "center" ,mx:-60 }}>
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
                justifyContent: 'center',
                alignItems: 'center', 
                '& > :not(style)': { m: 1 },
              }}
            >
              <TextField
                id="outlined-basic"
                InputProps={{ 
                  startAdornment: (
                    <SearchIcon sx={{ mr: 1 }} />
                  ),
                }}
                sx={{ width: '80%', height: '50px', mt: '40px', p: 3, mx: 3, }}
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
