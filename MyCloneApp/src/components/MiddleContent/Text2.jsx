import React from 'react';
import { Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Text2() {
  const cities = [
    {
      name: 'São Paulo',
      listings: [
        'Apartamentos para alugar em São Paulo',
        'Casas para alugar em São Paulo',
        'Studios e kitnets para alugar em São Paulo',
        'Casas em condomínio para alugar em São Paulo'
      ]
    },
    {
      name: 'Rio de Janeiro',
      listings: [
        'Apartamentos para alugar no Rio de Janeiro',
        'Casas para alugar no Rio de Janeiro',
        'Studios e kitnets para alugar no Rio de Janeiro',
        'Casas em condomínio para alugar no Rio de Janeiro'
      ]
    },
    {
      name: 'Porto Alegre',
      listings: [
        'Apartamentos para alugar em Porto Alegre',
        'Casas para alugar em Porto Alegre',
        'Studios e kitnets para alugar em Porto Alegre',
        'Casas em condomínio para alugar em Porto Alegre'

      ]
    },
    {
      name: 'Belo Horizonte',
      listings: [
        'Apartamentos para alugar em Belo Horizonte',
        'Casas para alugar em Belo Horizonte',
        'Studios e kitnets para alugar em Belo Horizonte',
        'Casas em condomínio para alugar em Belo Horizonte'

      ]
    },
    {
      name: 'Campinas',
      listings: [
        'Apartamentos para alugar em Campinas',
        'Casas para alugar em Campinas',
        'Studios e kitnets para alugar em Campinas',
        'Casas em condomínio para alugar em Campinas'
      ]
    },
    {
      name: 'Santo André',
      listings: [
        'Apartamentos para alugar em Santo André',
        'Casas para alugar em Santo André',
        'Studios e kitnets para alugar em Santo André',
        'Casas em condomínio para alugar em Santo André'
      ]
    },
    {
      name: 'São Bernardo do Campo',
      listings: [
        'Apartamentos para alugar em São Bernardo do Campo',
        'Casas para alugar em São Bernardo do Campo',
        'Studios e kitnets para alugar em São Bernardo do Campo',
        'Casas em condomínio para alugar em São Bernardo do Campo'
      ]
    },
    {
      name: 'Guarulhos',
      listings: [
        'Apartamentos para alugar em Guarulhos',
        'Casas para alugar em Guarulhos',
        'Studios e kitnets para alugar em Guarulhos',
        'Casas em condomínio para alugar em Guarulhos'
      ]
    },
    {
      name: 'Osasco',
      listings: [
        'Apartamentos para alugar em Osasco',
        'Casas para alugar em Osasco',
        'Studios e kitnets para alugar em Osasco',
        'Casas em condomínio para alugar em Osasco'
      ]
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  }

  return (
    <Slider {...settings}>
      {cities.map(city => (
        <div key={city.name}>
          <Grid container spacing={2} direction="row" wrap="nowrap" sx={{ mt: 5 }}>
            <Grid item xs={12}>
              <Typography variant="h1" sx={{ mb: 5 }}>{city.name}</Typography>
              {city.listings.map((listing, index) => (
                <Typography sx={{ mb: 3 }} key={index} variant="body2">{listing}</Typography>
              ))}
            </Grid>
          </Grid>
        </div>
      ))}
    </Slider>
  );
}
