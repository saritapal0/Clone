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
import image from "../../assets/Images/image.webp";

export default function Row3() {
  const [imageDimensions, setImageDimensions] = React.useState({ width: 0, height: 0 });

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageDimensions({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center" >
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: 'flex', mt: 8,mx:-6, minWidth: "100%", minHeight: 500, width: "700px", backgroundColor: '#e1bee7', borderRadius: 0 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Grid container spacing={2} justifyContent="flex-start" alignItems="center"> {/* Adjusted justifyContent */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="h1" gutterBottom fontWeight="normal">Alugar bem, sem complicação e fiador</Typography>
                  <Typography variant="body1" paragraph fontWeight="normal">
                    Agende visitas online, negocie sem intermediários e assine o contrato digitalmente.
                    Sem fiador. Sem depósito caução. Sem filas.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", width: "100%" }}>Ver apartamentos para alugar</Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", mt: 2, width: "100%" }} endIcon={<ArrowForwardIcon />}>
                    Como alugar no QuintoAndar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '100%', mt: 10 }}
                    image={Table}
                    alt="Placeholder Image"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            src={image}
            alt="Placeholder Image"
            onLoad={handleImageLoad}
            sx={{ maxWidth: "90%", maxHeight: 500, mx: 5,mt:6}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
