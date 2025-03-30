import React from 'react'
import Navbar from './Navbar';
import ContactInfo from './Contact';
import Reason from './Reason';
import AboutUs from './Aboutus';
import ImageCarousel from './ImageCarousel';
import Why from './Why';
import Review from './Review';
import ProductList from './ProductList';
import ContactForm from './Contactform';
import Home from './Home';

function Web1() {
  return (
    <>
    <Navbar />
    <Home/>
    <ContactInfo/>
     <Reason/>
     <AboutUs/>
      <br></br>
      <ImageCarousel/>
      <br></br>
      <Why/>
      <Review/>
      <ProductList/>
      <ContactForm/>
    </>
  )
}

export default Web1