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
            title="The Secret"
            price={29.99}
            image="https://blackwells.co.uk/jacket/l/9781847370297.jpg"
            rating={3}
          />
          <Product
            id="91011123"
            title="The Secret"
            price={29.99}
            image="https://blackwells.co.uk/jacket/l/9781847370297.jpg"
            rating={3}
          />
        </div>
        {/* this is the second row */}
        <div className="home__row">
          <Product
            id="14151617"
            title="The Secret"
            price={29.99}
            image="https://blackwells.co.uk/jacket/l/9781847370297.jpg"
            rating={3}
          />
          <Product
            id="18192021"
            title="The Secret"
            price={29.99}
            image="https://blackwells.co.uk/jacket/l/9781847370297.jpg"
            rating={3}
          />
          <Product
            id="22232425"
            title="The Secret"
            price={29.99}
            image="https://blackwells.co.uk/jacket/l/9781847370297.jpg"
            rating={3}
          />
          <Product
            id="26272829"
            title="The Secret"
            price={29.99}
            image="https://blackwells.co.uk/jacket/l/9781847370297.jpg"
            rating={3}
          />
        </div>
        {/* this is the third row */}
        <div className="home__row">
          <Product
            id="30313233"
            title="The Secret"
            price={29.99}
            image="https://blackwells.co.uk/jacket/l/9781847370297.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
