import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Row31 from "../../components/MiddleContent/Row31";

export default function BasicCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minWidth: 650, minHeight: 545, border: '0px solid #ccc', backgroundColor: '#e1bee7' }}>
      <CardContent>
            
          </CardContent>
         
        </Card>
      </Grid>
      <Row31/>
    </Grid>
  );
}
