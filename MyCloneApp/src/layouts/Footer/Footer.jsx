import React from 'react';
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ p: 6, bgcolor: '#fafafa', color: 'black', textAlign: 'left' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Sobre nós</Typography>
          <Typography variant="body2">
            Conheça o QuintoAndar<br />
            Segurança no QuintoAndar<br />
            Regiões atendidas<br />
            Conheça a Garantia QuintoAndar<br />
            Central de Ajuda<br />
            Mapa do Site<br />
            Mapa de Condomínios<br />
            Relatório de Transparência Salarial
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Produtos</Typography>
          <Typography variant="body2">
            Simular financiamento imobiliário<br />
            Indique um imóvel<br />
            Valor de aluguel por bairro<br />
            Meu Lugar
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Trabalhe com a gente</Typography>
          <Typography variant="body2">
            Carreiras<br />
            Corretagem<br />
            Fotografia<br />
            Vistorias<br />
            Parceria de Reparos<br />
            Parceria com Portarias
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">
          Politica de privacidade<br />
          Termos e condições de uso<br />
          Política de Cookies<br />
          Preferências de cookies<br />
          Manual do usuário
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">
          GRPQA Ltda. - CRECI-SP J24.344
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">
          Versão: 06/06/2024, 15:00<br />
          Google Play Quinto Andar App<br />
          App Store Quinto Andar App
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
