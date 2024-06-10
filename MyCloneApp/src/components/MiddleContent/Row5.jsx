import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Gate from '../../assets/Images/Gate.webp'; // Import image
import Row51 from '../../components/MiddleContent/Row51'

export default function Row5() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'flex-start', marginright: "40px" }}>
      <Card sx={{ display: 'flex', maxWidth: 710, minHeight: 600, backgroundColor: '#fce4ec', mt: 7, borderRadius: 0 }}>
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
            sx={{ width: '50%' }}
            image={Gate} // Set the imported image variable as the source
            alt="Placeholder Image"
          />
        </CardContent>
      </Card>
     <Row51/>
    </Box>
  );
}
