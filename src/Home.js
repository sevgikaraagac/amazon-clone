import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home"> 
        <div className="home__container">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
            alt=""  />

            <div className="home__row">
                <Product 
                id="726436"
                title="Karaca Cookplus Mk-37 Quick Chef 1001,"
                price={798.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61rcFvc7QJL._AC_SL1500_.jpg"
                rating={5} />

                <Product
                 id="623686"
                 price={256}
                 title=" 
                 Arnica ET14300 Tesla Premium Toz Hazneli Elektrikli Süpürge, Rose "
                 image="https://images-na.ssl-images-amazon.com/images/I/518xavIFD1L._AC_SL1024_.jpg"
                 rating={5}
                />

                <Product
                 id="623686"
                 price={1994.08}
                 title="Sony WH-1000XM3 Kablosuz Kulak Üstü Kulaklık, Gümüş"
                 image="https://images-na.ssl-images-amazon.com/images/I/61y9wSFawEL._AC_SL1500_.jpg"
                 rating={5}
                />
                 <Product
                 id="623686"
                 price={2000}
                 title="
                 Lenco TCD-2500 Retro USBli Radyolu CD Çalarlı Pikap Plak Çalar"
                 image="https://images-na.ssl-images-amazon.com/images/I/71C3-pT%2Bn1L._AC_SL1500_.jpg"
                 rating={5}
                />
            </div>

            <div className="home__row">
            <Product
            id="626436"
            price={299}
            title="Sonos Move - Battery-Powered Smart Speaker, Wi-Fi And Bluetooth With Alexa Built-In - Lunar White"
            image="https://images-na.ssl-images-amazon.com/images/I/712y7nbjc4L._AC_SY879_.jpg"
            rating={3}
            />
            <Product
            id="626437"
            price={345.00}
            title="Ray-Ban Rb3605n Aviator Sunglasses"
            image="https://m.media-amazon.com/images/I/61rT3Lys8oL._AC_UL160_SR160,160_.jpg"
            rating={4}
            />
            <Product
             id="626877"
             price={125.09}
             title="LG 27UL850-W 27 Inch UHD (3840 x 2160) IPS Display with VESA DisplayHDR 400 and USB Type-C Connectivity, White"
             image="https://images-na.ssl-images-amazon.com/images/I/41oCVMWZXkL._AC_US218_.jpg"
             rating={4}
            />
            </div>

            <div className="home__row">
            <Product
            id="635877"
            price={1094.98}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
            />
            </div>




        </div>
        
            
        </div>
    )
}

export default Home
