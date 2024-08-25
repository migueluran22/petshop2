import React from 'react';
import Header from '../components/header';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from '../components/productCard';
import comederoImage from '../assets/comedero.jpg';
import pelotaImage from '../assets/pelota.avif';
import fuenteAguaImage from '../assets/fuente-agua.webp';

function Index() {
    const images = [
        comederoImage,
        pelotaImage,
        fuenteAguaImage,
    ];

    const carouselStyle = {
        width: '600px',
        margin: '0 auto',
    };

    const imageStyle = {
        borderRadius: '15px',
    };

    const products = [
        { image: comederoImage, title: "NEXGARD SPECTRA PERROS 2-3.5 KG", price: "$ 63.000" },
        { image: pelotaImage, title: "Gemon Mini Adulto Con Salmone E Riso 3 kg", price: "$ 115.000" },
        { image: fuenteAguaImage, title: "Gemon All Breeds Puppy y Junior Pollo E Riso 3 kg", price: "$ 120.000" },
        { image: fuenteAguaImage, title: "Gemon Paté Con Tacchino Light 150 gr", price: "$ 14.000" },
    ];

    return (
        <div>
            <Header />
            <div className="App">
                <h1 style={{ textAlign: 'center' }}>My Carousel</h1>
                <div style={carouselStyle}>
                    <Carousel
                        autoPlay
                        interval={5000}
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={true}
                    >
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="App">
                <h1 style={{ textAlign: 'center' }}>Nuestros Productos</h1>
                <div className="products-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Index;
