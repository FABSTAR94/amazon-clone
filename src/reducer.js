export const initialState = {
  basket: [],
};

// Here we created a selector in which is highly used in production environments.
// Takes the basket and reduces (function that iterates through basket and adds the total.) every time it loops through I want the item price to add to the initial price and by default it is 0.
// Its basically like a fancy way to write a for loop and increment and tally everything up and then return it.
// Make sure you have a selector inside a reducer. Good Practice!
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// reducer pays an important role when pushing the item inside the data layer.
// Context api and redux are not the same thing but both use the idea of a global store for your app in which you can dispatch actions into store and reducer listens. You just remove an item i know what to do you added an item i know what to do.

// State of the app and what we are tryin to do
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
