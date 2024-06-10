import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Ph from '../../assets/Images/Ph.webp'; // Import image
import Row61 from '../../components/MiddleContent/Row61'


export default function Row6() {
  return (
    <Box>
      <Card sx={{ display: 'flex', maxWidth: 700, minHeight: 575, backgroundColor: '#3f51b5',borderRadius:0 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Grid container direction="column" justifyContent="space-between" style={{ width: '20%' }}>
            <Grid item>
              <Typography variant="h3" gutterBottom fontWeight="normal">Proprietário, boa notícia:</Typography>
              <Divider />
              <Typography variant="body1" paragraph fontWeight="normal">
                No QuintoAndar
                seu imóvel
                aluga rápido.
              </Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" sx={{ borderRadius: '30px', color: 'black', backgroundColor: "white", mt: 2, width: "200px", height:"50px" }} endIcon={<ArrowForwardIcon />}>
                Anunciar agora
              </Button>

            </Grid>
          </Grid>
          <CardMedia
            component="img"
            sx={{ width: '40%' }}
            image={Ph} // Set the imported image variable as the source
            alt="Placeholder Image"
          />
        </CardContent>
        <Row61/>  
      </Card>
    
    </Box>
  );
}
