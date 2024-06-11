import React from 'react';
import imageSrc from '../../assets/Images/img2.webp'; // Import your image source
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function BlueCard() {
  return (
    <Card sx={{ border: '30px solid blue', padding: '20px',mt:8, width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', textAlign: 'left', borderRadius: 0 }}>
    <CardContent sx={{ flex: '1', paddingTop: '20px' }}>
      <Typography variant="h1" >
        Vem ver os Favoritos da Malu Borges no QuintoAndar.
      </Typography>
      <Typography sx={{ mt: 5 }}>
        Procurando um novo cenário pro seu look final? Veja as casas e apartamentos que a influenciadora selecionou a dedo pra quem quer um paraíso dos looks, um cantinho pro sono de beleza ou pra quem tem crianças ligadas nos 220.
      </Typography>
    </CardContent>
    <Box sx={{ marginTop: '20px' }}>
      <Button variant="contained" color="primary" sx={{ width: '300px', height: '50px', borderRadius: '30px' }}>
        Busque seu imovel
      </Button>
    </Box>
  </Card>
);
}  

export default function Row2() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} >
        <img src={imageSrc} alt="Description of the image" 
        style={{  height: '90vh', minWidth: '100%', marginTop: '65px', minHeight: 500, width: "700px", }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <BlueCard />
        </Box>
      </Grid>
    </Grid>
  );
}
