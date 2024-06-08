import React from 'react';
import imageSrc from '../../assets/Images/img2.webp'; // Import your image source
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function BlueCard() {
  const cardStyle = {
    border: '20px solid blue',
    padding: '20px',
    width: '550px',
    height: '550px',
    margin: '8px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
  };

  const contentStyle = {
    flex: '1',
    marginBottom: '20px', // Added margin bottom
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  return (
    <Card style={cardStyle}>
      <CardContent style={contentStyle}>
        <Typography variant="h1">
          Vem ver os Favoritos da Malu Borges no QuintoAndar.
        </Typography>
        <Typography sx={{mt:5}}>
          Procurando um novo cenário pro seu look final? Veja as casas e apartamentos que a influenciadora selecionou a dedo pra quem quer um paraíso dos looks, um cantinho pro sono de beleza ou pra quem tem crianças ligadas nos 220.
        </Typography>
      </CardContent>
      <div style={buttonContainerStyle}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 375, height: 50, borderRadius: 10 }}
        >
          Busque seu imovel
        </Button>
      </div>
    </Card>
  );
}

export default function Row2() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <img src={imageSrc} alt="Description of the image" style={{ maxWidth: '120%', height: '517px', margin:40}} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <BlueCard />
        </Box>
      </Grid>
    </Grid>
  );
}
