import React, { useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import CategoriesSection from '../components/Categories';
import PopularSection from '../components/Popular';
import MainProducts from '../components/MainProducts';
import Features from '../components/Features';
import BrandsSection from '../components/Brands';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';

const Home = () => {
    const [chatOpen, setChatOpen] = useState(false);

    const handleChatOpen = () => {
        setChatOpen(true);
    };

    const handleChatClose = () => {
        setChatOpen(false);
    };
    return (
        <div>
            <Header />
            <div className="baby-accessories-container">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={5000}
                    className="main-carousel"
                >
                    <div
                        className="carousel-slide"
                        style={{ backgroundImage: "url('https://i.postimg.cc/6q6Hsnb4/baby-s-sock-pair-woolen-shoes-pacifier-cap-milk-bottle-toy-orange-background.jpg')" }}
                    >
                        <div className="text-content">
                            <h2>New Brand Collection</h2>
                            <h1>Baby Accessories</h1>
                            <p>Flat 50% Off</p>
                            <button className="shop-now-btn">Shop Now</button>
                        </div>
                    </div>
                    <div
                        className="carousel-slide"
                        style={{ backgroundImage: "url('https://i.postimg.cc/mDfcr1qd/high-angle-cute-little-baby-accesories-with-copy-space.jpg')" }}
                    >
                        <div className="text-content">
                            <h2>Exclusive Baby Gear</h2>
                            <h1>Latest Collection</h1>
                            <p>Up to 40% Off</p>
                            <button className="shop-now-btn">Explore Now</button>
                        </div>
                    </div>
                    <div
                        className="carousel-slide"
                        style={{ backgroundImage: "url('https://i.postimg.cc/ZKR62ph3/mid-shot-cute-baby-taking-clothes-from-drawer.jpg')" }}
                    >
                        <div className="text-content">
                            <h2>New Arrivals</h2>
                            <h1>Stylish Baby Outfits</h1>
                            <p>Get 20% Off</p>
                            <button className="shop-now-btn">Discover</button>
                        </div>
                    </div>
                </Carousel>
                <div className="side-banners">
                    <div className="banner baby-strollers">
                        <h3>Baby Strollers</h3>
                        <h2>Chick me'</h2>
                        <p>Browse Products</p>
                    </div>
                    <div className="banner baby-pacifier">
                        <h3>Baby Pacifier</h3>
                        <h2>Baby Love</h2>
                        <p>Browse Products</p>
                    </div>
                </div>
            </div>
            <div>
                <CategoriesSection></CategoriesSection>
            </div>
            <div>
                <PopularSection></PopularSection>
            </div>
            <div className='shop-now-carousel'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={5000}
                    className="main-carousel"
                >
                    <div
                        className="carousel-slides"
                        style={{ backgroundImage: "url('https://i.postimg.cc/ZKR62ph3/mid-shot-cute-baby-taking-clothes-from-drawer.jpg')" }}
                    >
                        <h2 style={{color:"black"}}>Celebrate With Love</h2>
                        <h1 style={{color:"#3498db"}}>Welcome To Baby Store</h1>
                        <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipis cing elit. <br /> Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <button className="shop-now-btn">Shop Now</button>

                    </div>
                    <div
                        className="carousel-slides"
                        style={{ backgroundImage: "url('https://i.postimg.cc/mDfcr1qd/high-angle-cute-little-baby-accesories-with-copy-space.jpg')" }}
                    >
                        <h2 style={{color:"black"}}>Celebrate With Love</h2>
                        <h1 style={{color:"#3498db"}}>Welcome To Baby Store</h1>
                        <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipis cing elit. <br /> Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <button className="shop-now-btn">Explore Now</button>
                    </div>
                    <div
                        className="carousel-slides"
                        style={{ backgroundImage: "url('https://i.postimg.cc/6q6Hsnb4/baby-s-sock-pair-woolen-shoes-pacifier-cap-milk-bottle-toy-orange-background.jpg')" }}
                    >
                        <h2 style={{color:"black"}}>Celebrate With Love</h2>
                        <h1 style={{color:"#3498db"}}>Welcome To Baby Store</h1>
                        <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipis cing elit. <br /> Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <button className="shop-now-btn">Discover</button>
                    </div>
                </Carousel>
            </div>
            <div>
                <Features></Features>
            </div>
            <div>
                <MainProducts></MainProducts>
            </div>
            <div>
                <BrandsSection></BrandsSection>
            </div>
            <Footer></Footer>
            <IconButton
    onClick={handleChatOpen}
    sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        backgroundColor: '#1a73e8',
        color: 'white',
        width: 60,  // Increase the width
        height: 60, // Increase the height
        fontSize: 30, // Increase the icon size
        '&:hover': { backgroundColor: '#1769aa' },
        zIndex: 1000,
    }}
>
    <ChatIcon fontSize="inherit" />
</IconButton>


            {/* Chatbot Component */}
            <Chatbot open={chatOpen} handleClose={handleChatClose} />

        </div>
    );
}

export default Home;
