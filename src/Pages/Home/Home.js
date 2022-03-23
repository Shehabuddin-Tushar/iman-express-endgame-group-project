import React from 'react';
import Services from '../../Component/BikeServices/Services';
import Blogs from '../../Component/Blogs/Blogs';
import OurPartnerSlider from '../../Component/OurPartner/OurPartner';
import Products from '../../Component/Products/Products';
import Reviews from '../../Component/Reviews/Reviews';
import MySlider from '../../Component/Slider/MySlider';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

function Home() {
  return <div>
    <title>IMan Xpress || Home</title> 
    <Navbar />
    <MySlider />
    <Services />
    <Products />
    <Blogs></Blogs>
    <Reviews></Reviews>
    <OurPartnerSlider></OurPartnerSlider>
    <Footer></Footer>
        </div>;
}

export default Home;
