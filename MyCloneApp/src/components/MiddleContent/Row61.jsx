import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import women from "../../assets/Images/women.webp";

export default function Row61() {
  return (
    <Grid item xs={12} sm={6}>
      <Card sx={{ backgroundColor: '#ffebee', borderRadius: 0, display: 'flex', height: 520, width: 500, justifyContent: 'flex-start' }}>
        <CardContent sx={{ marginTop: "15px" }}>
          <Typography variant="h1" component="h2">
            Fechamos um contrato de aluguel a cada 4 minutos
          </Typography>
          <Typography sx={{mt:6}}>
            Fechamos um contrato de aluguel a cada 4 minutos
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '30px', color: 'white', backgroundColor: '#3f51b5', height: "50px", mt:"150px"  }}
            endIcon={<ArrowForwardIcon />}
          >
            Saiba mais
          </Button>
        </CardContent>
        <CardMedia
          component="img"
          image={women} // Adjust the path to your image
          alt="Women"
          sx={{ height: 220, width: 'auto', alignSelf: 'center', mt:"250px" }} // Adjust the height and width
        />
      </Card>
    </Grid>
  );
}

