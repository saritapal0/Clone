import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function BasicCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Card sx={{ minWidth: 730, minHeight: 545, border: '0px solid #ccc', backgroundColor: '#bdbdbd' }}>
          <CardContent>
            {/* Content of your card */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
