// import React from "react";
// import "./Product.css";
// import { useStateValue } from "./StateProvider";
// // import pic from "./image/shirt.jpg";
// // import image;

// function Product({id, title, image, price, rating }) {

//   // const [state, dispatch] = useStateValue();

//   // const addToBasket = () => {
//   //     dispatch({
//   //       type: 'ADD_TO_BASKET',
//   //       item: {
//   //         id: id,
//   //         title: title,
//   //         iamge: image,
//   //         price: price,
//   //         rating: rating,
//   //       },
//   //     });
//   // };

//   const [{ basket }, dispatch] = useStateValue();

//   const addToBasket = () => {
//     // dispatch the item into the data layer
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//       },
//     });
//   };

//   const addToDesign = () => {

//   }


//   return (
//     <div className="product">
//       <div className="product__info">
//         <p> {title}</p>
//         <p className="product_price">
//           <small>₹</small>
//           <small>{price}</small>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>⭐</p>
//             ))}
//         </div>
//       </div>
//       <img src={image} alt="" />

//       <button onClick={addToDesign}>Design</button>
//       <button>Description</button>
//       <button onClick={addToBasket}>Add to Basket</button>
//     </div>
//   );
// }

// export default Product;


import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, desg, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [{ dcount }, dispatch2] = useStateValue();

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

  const addToDesign = () => {
    dispatch2({
      type: "GO_TO_DESIGN",
      item: {
        id: id,
        title: title,
        image: image,
        desg: desg,
        rating: rating,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <Link to="/design">
        <button onClick={addToDesign}>Design</button>
      </Link>  
       {/* <button>Description</button> */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;