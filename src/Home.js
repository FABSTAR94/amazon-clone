import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
          alt="amazon home banner"
        />
        {/* this is the first row  */}
        <div className="home__row">
          {/* Here we are defining what the prop is so we can use it later on product component by the key */}
          <Product
            id="12345678"
            title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
            price={458.99}
            image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="91011123"
            title="Apple 13 MacBook Air Core i5 CPU, 8GB RAM (2017 Model 128GB)"
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71hfs3%2BFRCL._AC_SX679_.jpg"
            rating={3}
          />
        </div>
        {/* this is the second row */}
        <div className="home__row">
          <Product
            id="30313233"
            title="Pillow Perfect Outdoor/Indoor Rave Teal Throw Pillows, 18.5 x 18.5, Green, 2 Pack"
            price={65.95}
            image="https://images-na.ssl-images-amazon.com/images/I/A1Td1bQyAWL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="3987345"
            title="INTO THE AM Men's Graphic Tees for Men - Short Sleeve T-Shirts"
            price={19.99}
            image="https://m.media-amazon.com/images/I/61LliSmjoaL._AC_UL640_FMwebp_QL65_.jpg"
            rating={3}
          />

          <Product
            id="22232425"
            title="SteveMadden Latch Black Leather Women's Shoes"
            price={139.99}
            image="https://cdn.shopify.com/s/files/1/2170/8465/products/AABTqG2u_N7JDiVjMulchQnv2HQkurH-mqYy6uATn5FHDf-e78sto44flC34INGwYT02b2rURGYOORk36NEljGUewT6zOASZHOCSyalu63eqMU7AOJTFL0h_-5zf8PRKMPwnsyymhwIjloN7Im1qvU8C22FFlL1qp7w6gdGh-llc4iPAB3moVTTe5JIYtK9KtBJlQGZN_grande.jpg?v=1569077792"
            rating={4}
          />
        </div>
        {/* this is the third row */}
        <div className="home__row">
          <Product
            id="30356733"
            title="ONDAISY Black Cz Gypsy Planet Half Crescent Sailor Luna Moon Pendant Charm Chain Necklace"
            price={19.95}
            image="https://images-na.ssl-images-amazon.com/images/I/711etMx0LWL._AC_UX695_.jpg"
            rating={5}
          />

          <Product
            id="18192021"
            title="Thursday Boot Company
            Rugged & Resilient Captain Men's Lace-up Boot"
            price={199.99}
            image="https://m.media-amazon.com/images/I/716Wl2uv6+L._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="30347845"
            title="Hanlolo Womens 50s Vintage Skirt Knee Length High Waist Pleated Midi Bow Skirts"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/512tVfkAybL._AC_UX679_.jpg"
            rating={4}
          />
        </div>
        {/* this is the fourth row */}
        <div className="home__row">
          <Product
            id="30313343"
            title="SHQUF Face Mask Disposable 51 Packs Black"
            price={17.99}
            image="https://m.media-amazon.com/images/I/61RivWaLRiL._AC_UY436_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="18192055"
            title="Practicing Mindfulness: 75 Essential Meditations to Reduce Stress, Improve Mental Health, and Find Peace in the Everyday"
            price={14.99}
            image="https://m.media-amazon.com/images/I/71+fzuFr8wL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="14152020"
            title="VECRY Men's Cool Cotton Beanie Slouch Skull Cap Long Baggy Hip-hop Winter Summer Hat"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Mx1anwBFL._AC_UX679_.jpg"
            rating={3}
          />
        </div>
        {/* this is the fifthh row */}
        <div className="home__row">
          <Product
            id="14745698"
            title="
            Butterfly Candle Holder - Silver Metal Rotating Spinning Butterflies with Flowers and Bees - Spinner Scandinavian Designs - 6 ¼ Inch Tall"
            price={7.99}
            image="https://m.media-amazon.com/images/I/717xswY3zDL._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            id="19534587"
            title="Simple Designs Home LF2000-BLK Mother-Daughter Floor Lamp with Reading Light, 71 x 20.47 x 11.35 inches, Black"
            price={36.99}
            image="https://m.media-amazon.com/images/I/718H1iH6pfL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
