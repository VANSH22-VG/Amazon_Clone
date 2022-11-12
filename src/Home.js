import React from "react";
import './Home.css';
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
                <Product id="121314"
                title="Alarm Clock"
                price={500}
                rating={4}
                image="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SX466_.jpghttps://images-na.ssl-images-amazon.com/images/I/91K9SyGiyzL.__AC_SY300_SX300_QL70_FMwebp_.jpg"/>
                 <Product id="121315"
                title="Stuffer Pillow"
                price={400}
                rating={3}
                image="	https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SX425_.jpg"/>
                <Product id="121316"
                title="Puma Bag"
                price={2000}
                rating={5}
                image="https://m.media-amazon.com/images/I/A1EftZPnfCL._AC_UX679_.jpg"/>
            </div>
            <div className="home__row">
                <Product id="121317"
                title="Nike shoes"
                price={5000}
                rating={4}
                image="https://m.media-amazon.com/images/I/71wbXtpEwQL._AC_UL480_FMwebp_QL65_.jpg"/>
                 <Product id="121318"
                title="Specs"
                price={500}
                rating={4}
                image="https://m.media-amazon.com/images/I/31Wxgg6AIbL._AC_SY1000_.jpg"/>
                <Product id="121319"
                title="Harry porter"
                price={2000}
                rating={5}
                image="https://m.media-amazon.com/images/I/51U4p-ir2BL.jpg"/>
            </div>
            <div className="home__row">
                <Product id="121320"
                title="Toy cars"
                price={1000}
                rating={4}
                image="	https://m.media-amazon.com/images/I/71OratyMu1S._AC_SX679_.jpg"/>
                 <Product id="121321"
                title="Headphones"
                price={1800}
                rating={4}
                image="	https://m.media-amazon.com/images/I/719+3m+YKpL._AC_SX466_.jpg"/>
                <Product id="121322"
                title="G Shock"
                price={10000}
                rating={5}
                image="https://m.media-amazon.com/images/I/91WK6U8AugL._AC_SY679_.jpg"/>
            </div>
            <div className="home__row">
                <Product id="121323"
                title="Home decor"
                price={2000}
                rating={4}
                image="https://m.media-amazon.com/images/I/71gvpZYgPxS._AC_SX522_.jpg"/>
                 <Product id="121324"
                title="Samsung LED"
                price={75000}
                rating={4}
                image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UL480_FMwebp_QL65_.jpg"/>
                <Product id="121325"
                title="Jacket"
                price={5000}
                rating={5}
                image="https://m.media-amazon.com/images/I/81Zt3HeEuAL._AC_UY550_.jpg"/>
            </div>
            <div className="home__row">
                <Product id="121326"
                title="One plus 9"
                price={50000}
                rating={5}
                image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SX679_.jpg"/>
                 <Product id="121327"
                title="Crocs sleepers"
                price={2500}
                rating={4}
                image="https://m.media-amazon.com/images/I/61ZMzd92WSL._AC_UX695_.jpg"/>
                <Product id="121328"
                title="Samsung Tablet"
                price={30000}
                rating={4}
                image="https://m.media-amazon.com/images/I/61e6MLXjcSS._AC_SY741_.jpg"/>
            </div>
        </div>
    )
}

export default Home;