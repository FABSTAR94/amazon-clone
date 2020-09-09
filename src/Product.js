import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// {}we break apart the object that we pass in. This is how we use props in react!
function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is basket", basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* //Here we created an empty array  */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      {/* Here we are using props again so we dont have to put the long url here */}
      <img src={image} alt="the secret" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
