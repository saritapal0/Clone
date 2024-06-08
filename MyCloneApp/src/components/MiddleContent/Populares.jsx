import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function SimpleCard() {
  return (
    <Card sx={{ border: 25, borderColor: '#bdbdbd', maxWidth: "1200px", height: "520px",borderRadius:0 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Simple Card
        </Typography>
        <Typography variant="body2">
          This is a simple card with a border radius.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
