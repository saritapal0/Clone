import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Table from '../../assets/Images/Table.webp'; // Import image


export default function BasicCard() {
  return (
    <Box>
    <Card sx={{ display: 'flex', maxWidth: 700, minHeight: 575, backgroundColor: '#e1bee7' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Grid container direction="column" justifyContent="space-between" style={{ width: '20%' }}>
          <Grid item>
            <Typography variant="h1" gutterBottom fontWeight="normal">Alugar bem, sem complicação e fiador</Typography>
            <Typography variant="body1" paragraph fontWeight="normal">
              Agende visitas online, negocie sem intermediários e assine o contrato digitalmente.
              Sem fiador. Sem depósito caução. Sem filas.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", width: "250px" }}>Ver apartamentos para alugar</Button>
            <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", mt: 2, width: "250px" }} endIcon={<ArrowForwardIcon />}>
              Como alugar no QuintoAndar
            </Button>

          </Grid>
        </Grid>
        <CardMedia
          component="img"
          sx={{ width: '60%' }}
          image={Table} // Set the imported image variable as the source
          alt="Placeholder Image"
        />
      </CardContent>
    </Card>
    
    </Box>
  );
}
