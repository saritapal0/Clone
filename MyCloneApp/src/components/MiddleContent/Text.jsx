import { Box, Typography ,Divider} from '@mui/material'
import React from 'react'

export default function Text() {
  return (
    <Box>
       <Typography variant='h1'>
       Onde você quiser, tem um QuintoAndar
       </Typography>
    <Typography variant="h4" component="div" sx={{mb:-4.5, mt:5}}>
      Alugar
    </Typography>
    <Typography variant="h4" component="div" sx={{mx: 10, p: 2}}>
      Comprar
    </Typography>
    <Divider />
    </Box>
  )
}
