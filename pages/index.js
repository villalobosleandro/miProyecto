import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Header from '../components/header/Header';
import Slider from '../components/slider';
import InfoMiddle from '../components/InfoMiddle';

const Home = () => (
  <div>
    <Head>
      <title>My App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>

    <Slider/>

    <InfoMiddle/>

    
  </div>
)

export default Home
