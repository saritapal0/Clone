import React from 'react';
import { Box, Grid } from '@mui/material';
import Image4 from '../../assets/Images/image4.webp'; // Import your image
import Row41 from '../../components/MiddleContent/Row41';

export default function Row4() {
    return (
        <Grid container spacing={3} mt={6}>
            {/* Image */}
            <Grid item xs={12} sm={6}>
                <Box display="flex" justifyContent="flex-start" >
                    <img
                        src={Image4}
                        alt="My Image"
                        style={{
                            height: '535px',
                            width: '100%',
                            maxWidth: '475px',
                            marginRight: '20px',
                            paddingRight:"50px"
                        }}
                    />
                </Box>
            </Grid>

            {/* Row41 component */}
            <Grid item xs={12} sm={6}>
                <Row41 />
            </Grid>
        </Grid>
    );
}
