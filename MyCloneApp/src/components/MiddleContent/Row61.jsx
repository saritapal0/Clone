import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Lock from '../../assets/Images/lock.webp'; // Import image

export default function Row61() {
  return (

    <Grid item xs={12} sm={6}>
      <Card sx={{backgroundColor: '#ffebee',borderRadius:0}}>
        <CardContent>
          <Typography variant="h1" component="h2">
            Fechamos um
            contrato de aluguel
            a cada 4 minutos
          </Typography>
          <Typography color="textSecondary">
            This is the content of card 2.
          </Typography>
          <Button variant="contained" color="primary" sx={{ borderRadius: '30px', color: 'black', backgroundColor: "white", mt: 2, width: "200px", height:"50px" }} endIcon={<ArrowForwardIcon />}>
                Saiba mais
              </Button>
        </CardContent>
      </Card>
    </Grid>

  );
}
