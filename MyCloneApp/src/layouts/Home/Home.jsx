import React from 'react'
import MainSlider from '../../components/MiddleContent/MainSlider'
import Row2 from '../../components/MiddleContent/Row2'
import Row3 from '../../components/MiddleContent/Row3'
import Row4 from '../../components/MiddleContent/Row4'
import Row5 from '../../components/MiddleContent/Row5'
import Row6 from '../../components/MiddleContent/Row6'
import Text1 from '../../components/MiddleContent/Text1'
import Text2 from '../../components/MiddleContent/Text2'
import Populares from '../../components/MiddleContent/Populares'



export default function Home() {
  return (
    <>
     
       <MainSlider />
        <Row2 />
        <Row3/>
        <Row4/>
        <Row5/>
        <Row6/>
        <Text1/>
        <Text2/>
        <Populares/>
    </>
  )
}
