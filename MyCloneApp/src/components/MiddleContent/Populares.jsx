import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function SimpleCard() {
  return (
    <Card sx={{ border: 25, borderColor: '#bdbdbd', maxWidth: "1200px", height: "520px", borderRadius: 0 ,mt:20}}>
      <CardContent>
        <Typography variant="h1" component="div">
          Buscas mais populares
        </Typography>
        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento à venda Diadema</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento à venda Taboão da Serra</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento barato em São Paulo</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento barato no Rio de Janeiro</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar em Curitiba</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar em Goiânia</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar em Salvador</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar em Santos</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar Florianópolis</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar Niterói</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar próximo ao metrô em São Paulo</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Apartamento para alugar próximo ao metrô no Rio de Janeiro</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Casas à venda em Barueri</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Casas à venda em Jundiaí</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Casas para alugar em Cotia</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1">Casas para alugar em São Gonçalo</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
