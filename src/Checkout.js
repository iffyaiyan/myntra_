// import React, { useState } from 'react';
// import './Checkout.css';
// import CheckoutProduct from './CheckoutProduct';
// import { useStateValue } from './StateProvider';
// import Subtotal from './Subtotal';

// function Checkout() {

//     const [{basket}, dispatch] = useStateValue();

//     return (
//         <div className="checkout">
//             <div className="checkout__left">
//                 <img 
//                     className="checkout__ad" 
//                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
//                     alt=""

//                 />

//                 <div>
//                     <h2 className="checkout_title">
//                         Your Shopping Basket

//                         {basket.map(item => (
//                             <CheckoutProduct
//                                 id={item.id}
//                                 title={item.title}
//                                 image={item.image}
//                                 price={item.price}
//                                 rating={item.rating}
//                             />
//                         ))}

//                     </h2>
//                 </div>
//             </div>
//             <div className="checkout__right">
//                 <h2> The subtotal will go here</h2>

                

//                 <Subtotal/>
//             </div>
//         </div>
//     )
// }

// export default Checkout;


import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;