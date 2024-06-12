import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import Googleplay from '../../assets/Images/Googleplay.png'
import Appstore from '../../assets/Images/Appstore.png'
import Logo from '../../../src/assets/Images/logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AbcIcon from '@mui/icons-material/Abc';


const Footer = () => {
  return (
    <Box sx={{ p: 6, bgcolor: '#ede7f6', color: 'black', textAlign: 'left' }}>
      <Grid container spacing={0} sx={{ textAlign: 'left' }}> {/* Set textAlign to left */}
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6">Produtos</Typography>
          <Typography variant="body2">
            Simular financiamento imobiliário<br />
            Indique um imóvel<br />
            Valor de aluguel por bairro<br />
            Meu Lugar
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ borderRadius: 8, bgcolor: '#283593', borderRadius: 0 }}>
            <CardContent>
              {/* Logo Image */}
              <img src={Logo} alt="Logo" style={{ height: '25px', width: 'auto', filter: 'invert(100%)' }} />
              {/* Card Content */}
              <Box sx={{ mt: 2, color: "white" }}>
                <Typography variant="body2">
                  Para proporcionar uma experiência inesquecível para quem precisa de um lar ou anuncia com a gente, o QuintoAndar aposta em design, segurança e tecnologia de ponta.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
     </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' ,mt:8}}>
        <Typography variant="body2" sx={{ flex: 1 }}>
        Politica de privacidade 
        </Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>
        Termos e condições de uso
        </Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>
        Política de Cookies
        </Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>
        Preferências de cookies
        </Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>
        Manual do usuário
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex" alignItems="center" mr={1}>
            < FacebookIcon />
          </Box>
          <Box display="flex" alignItems="center" mr={1}>
            <InstagramIcon/>
          </Box>
          <Box display="flex" alignItems="center" mx={1}>
            <TwitterIcon/>
          </Box>
          <Box display="flex" alignItems="center" mx={1}>
            <LinkedInIcon/>
          </Box>
          <Box display="flex" alignItems="center" mx={1}>
            <AbcIcon/>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 4 ,display: 'flex', flexDirection: 'row', alignItems: 'center',flex: 1}}>
        <Typography variant="body2">
          GRPQA Ltda. - CRECI-SP J24.344
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ flex: 1 }}>
          Versão: 06/06/2024, 15:00
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex" alignItems="center" mr={1}>
            <img src={Googleplay} alt="Google Play" />
          </Box>
          <Box display="flex" alignItems="center">
            <img src={Appstore} alt="App Store" />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default Footer;
