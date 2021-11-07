import React from "react";
import "./Home.css";
import Product from "./Product";
import mainpic from "./image/carouselImageAdd.jpg";
import Carousel from 'react-bootstrap/Carousel' 

// Carousel
import crimages1 from "./carousel/Carousel1.webp";
import crimages2 from "./carousel/Carousel2.webp";
import crimages3 from "./carousel/Carousel3.webp";
import crimages4 from "./carousel/Carousel4.jpg";
import crimages5 from "./carousel/Carousel5.webp";


// Deals of the Day

import dodimages1 from "./deals_of_day/BestBuys1.webp";
import dodimages2 from "./deals_of_day/BestBuys2.webp";
import dodimages3 from "./deals_of_day/BestBuys3.webp";
import dodimages4 from "./deals_of_day/BestBuys4.webp";
import dodimages5 from "./deals_of_day/BestBuys5.webp";
import dodimages6 from "./deals_of_day/BestBuys6.webp";

// Biggest deals on top brands

import bgdimages1 from "./biggest_deal/TopBrands1.webp";
import bgdimages2 from "./biggest_deal/TopBrands2.webp";
import bgdimages3 from "./biggest_deal/TopBrands3.jpg";
import bgdimages4 from "./biggest_deal/TopBrands4.webp";
import bgdimages5 from "./biggest_deal/TopBrands5.jpg";
import bgdimages6 from "./biggest_deal/TopBrands6.webp";
import bgdimages7 from "./biggest_deal/TopBrands7.webp";
import bgdimages8 from "./biggest_deal/TopBrands8.webp";
import bgdimages9 from "./biggest_deal/TopBrands9.webp";
import bgdimages10 from "./biggest_deal/TopBrands10.webp";

// category bag
import cimages1 from "./category/CategoryBag1.webp";
import cimages2 from "./category/CategoryBag2.webp";
import cimages3 from "./category/CategoryBag3.webp";
import cimages4 from "./category/CategoryBag4.webp";
import cimages5 from "./category/CategoryBag5.webp";
import cimages6 from "./category/CategoryBag6.webp";

// explore brands
import expimages1 from "./explorebrand/ExploreBrands1.webp";
import expimages2 from "./explorebrand/ExploreBrands2.webp";
import expimages3 from "./explorebrand/ExploreBrands3.webp";
import expimages4 from "./explorebrand/ExploreBrands4.webp";
import expimages5 from "./explorebrand/ExploreBrands5.webp";


// TRENDING IN SPORTS WEAR
import spimages1 from "./sports_wear/SportsWear1.webp";
import spimages2 from "./sports_wear/SportsWear2.webp";
import spimages3 from "./sports_wear/SportsWear3.webp";
import spimages4 from "./sports_wear/SportsWear4.webp";
import spimages5 from "./sports_wear/SportsWear5.webp";


// TRENDING IN FOOTWEAR
import ftimages1 from "./footwear/TrendFootwear1.webp";
import ftimages2 from "./footwear/TrendFootwear2.webp";
import ftimages3 from "./footwear/TrendFootwear3.jpg";
import ftimages4 from "./footwear/TrendFootwear4.webp";
import ftimages5 from "./footwear/TrendFootwear5.webp";


// TRENDING IN ACCESSORIES
import acimages1 from "./accessories/TrendAccessories1.webp";
import acimages2 from "./accessories/TrendAccessories2.webp";
import acimages3 from "./accessories/TrendAccessories3.jpg";
import acimages4 from "./accessories/TrendAccessories4.jpg";
import acimages5 from "./accessories/TrendAccessories5.webp";

// import Kurtas from "./images/Kurtas sets.png"
// import Sarees from "./images/Sarees.png"
// import Dresses from "./images/Dresses.png"
// import Long from "./images/loungwear.png"
// import styles from "./Home.css"
// import Jwellery from "./images/Jewellary.png"
// import Tops from "./images/Tops.png"
// import Handbag from "./images/Bags.png"
// import Trackpant from "./images/Trackpant.png"
// import Wplus from "./images/Wplus.png"
// import ForHim from "./images/ForHim/ForHim.png"
// import Tshirt from "./images/ForHim/Tshirt.png"
// import Longwear from "./images/ForHim/Longwear.png"
// import Shirts from "./images/ForHim/Shirts.png"
// import Inner from "./images/ForHim/Innerwear.png"
// import Trac from "./images/ForHim/Trackpants.png"
// import FlipFlops from "./images/ForHim/Flip-flop.png"
// import Shorts from "./images/ForHim/Shorts.png"
// import SportsShoes from "./images/ForHim/SportsShoes.png"
// import Suits from "./images/ForHim/Suits.png"
// import Kurtasmen from "./images/ForHim/KurtasMen.png"
// import { useHistory } from 'react-router'


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src={mainpic}
          alt=""
        /> */}
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={crimages1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={crimages2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={crimages3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={crimages4}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={crimages5}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>

        <h1>DEALS OF THE DAY</h1>
        <div className="home__row">
          <Product 
            id = "1"
            title="Casual Shoes" 
            price={1999} 
            image={dodimages1} 
            rating={5} />

          <Product 
            id = "2"
            title="Trackpants" 
            price={999} 
            image={dodimages2} 
            rating={5} 
          />

          <Product 
            id = "3"
            title="Sports Shoes" 
            price={2499} 
            image={dodimages3} 
            rating={5} 
          />
        </div>

        <div className="home__row">
          <Product 
            id = "4"
            title="Shirts" 
            price={899} 
            image={dodimages4} 
            rating={5} />

          <Product 
            id = "5"
            title="Jeans" 
            price={999} 
            image={dodimages5} 
            rating={5} 
          />

          <Product 
            id = "6"
            title="T-Shirts" 
            price={499} 
            image={dodimages6} 
            rating={5} 
          />
        </div>

        <h1>BIGGEST DEALS ON TOP BRANDS</h1>
        <div className="home__row">
          <Product 
            id = "7"
            title="U.S. POLO ASSN" 
            price={1400} 
            image={bgdimages1} 
            rating={5} />

          <Product 
            id = "8"
            title="Levis" 
            price={1500} 
            image={bgdimages2} 
            rating={5} 
          />

          <Product 
            id = "9"
            title="TOMMY HILFIGER" 
            price={1450} 
            image={bgdimages3} 
            rating={5} 
          />

          <Product 
            id = "10"
            title="GAP" 
            price={1800} 
            image={bgdimages4} 
            rating={5} 
          />

          <Product 
            id = "11"
            title="UNITED COLOR OF BENETON" 
            price={2100} 
            image={bgdimages5} 
            rating={5} 
          />
        </div>

        <div className="home__row">
          <Product 
            id = "12"
            title="JACK&JONES" 
            price={1600} 
            image={bgdimages6} 
            rating={5} />

          <Product 
            id = "13"
            title="NIKE" 
            price={2300} 
            image={bgdimages7} 
            rating={5} 
          />

          <Product 
            id = "14"
            title="PUMA" 
            price={1500} 
            image={bgdimages8} 
            rating={5} 
          />

          <Product 
            id = "15"
            title="SKECHERS" 
            price={1300} 
            image={bgdimages9} 
            rating={5} 
          />

          <Product 
            id = "16"
            title="crocs" 
            price={1450} 
            image={bgdimages10} 
            rating={5} 
          />
        </div>


        <h1>CATEGORIES TO BAG</h1>
        <div className="home__row">
          <Product 
            id = "17"
            title="Shirts" 
            price={300} 
            image={cimages1} 
            rating={5} 
          />
          <Product 
            id = "18"
            title="T-Shirts" 
            price={350} 
            image={cimages2} 
            rating={5} 
          />
          <Product 
            id = "19"
            title="Jeans" 
            price={250} 
            image={cimages3} 
            rating={5} 
          />
          
        </div>

        <div className="home__row">
            <Product 
            id = "20"
            title="Shorts & Trousers" 
            price={600} 
            image={cimages4} 
            rating={5} 
            />

            <Product 
            id = "21"
            title="Casual Shoes" 
            price={1500} 
            image={cimages5} 
            rating={4} 
            />

            <Product 
            id = "22"
            title="Infant Essentials" 
            price={150} 
            image={cimages6} 
            rating={5} 
            />
        </div>

        <h1>EXPLORE TOP BRANDS</h1>

        <div className="home__row">
            <Product 
            id = "23"
            title="Fitness Collection" 
            price={450} 
            image={expimages1} 
            rating={5} 
            />

            <Product 
            id = "24"
            title="Levis" 
            price={1000} 
            image={expimages2} 
            rating={5} 
            />

            <Product 
            id = "25"
            title="The Roadster" 
            price={800} 
            image={expimages3} 
            rating={5} 
            />
        
            <Product 
            id = "26"
            title="JACK&JONES" 
            price={1200} 
            image={expimages4} 
            rating={5} 
            />

            <Product 
            id = "27"
            title="HRX" 
            price={950} 
            image={expimages5} 
            rating={5} 
            />
        </div>

        <h1>TRENDING IN SPORTS WEAR</h1>

        <div className="home__row">
            <Product 
            id = "28"
            title="Best Of Actiwear" 
            price={1450} 
            image={spimages1} 
            rating={5} 
            />

            <Product 
            id = "29"
            title="Footwear By Nike" 
            price={3000} 
            image={spimages2} 
            rating={5} 
            />

            <Product 
            id = "30"
            title="Actiwear By Proline" 
            price={800} 
            image={spimages3} 
            rating={5} 
            />
        
            <Product 
            id = "31"
            title="ASICS Gel Running Shoes" 
            price={4000} 
            image={spimages4} 
            rating={5} 
            />

            <Product 
            id = "32"
            title="Online Exclusive Nike Styles" 
            price={2250} 
            image={spimages5} 
            rating={5} 
            />
        </div>


        <h1>TRENDING IN FOOTWEAR</h1>
        <div className="home__row">
            <Product 
            id = "33"
            title="Neutral Shades" 
            price={1450} 
            image={ftimages1} 
            rating={5} 
            />

            <Product 
            id = "34"
            title="Outback Outdoor Shoes" 
            price={3500} 
            image={ftimages2} 
            rating={5} 
            />

            <Product 
            id = "35"
            title="Sneakers For Dancers" 
            price={1370} 
            image={ftimages3} 
            rating={5} 
            />
        
            <Product 
            id = "36"
            title="Printed Sneakers For Men" 
            price={1980} 
            image={ftimages4} 
            rating={5} 
            />

            <Product 
            id = "37"
            title="Flip-Flop & Sliders" 
            price={950} 
            image={ftimages5} 
            rating={5} 
            />
        </div>

        <h1>TRENDING IN ACCESSORIES</h1>
        <div className="home__row">
            <Product 
            id = "38"
            title="Sporty Watches" 
            price={4500} 
            image={acimages1} 
            rating={5} 
            />

            <Product 
            id = "39"
            title="Wireless Headphones" 
            price={2700} 
            image={acimages2} 
            rating={5} 
            />

            <Product 
            id = "40"
            title="White Watch" 
            price={8100} 
            image={acimages3} 
            rating={5} 
            />
        
            <Product 
            id = "41"
            title="Best Of Fastrack" 
            price={5200} 
            image={acimages4} 
            rating={5} 
            />

            <Product 
            id = "42"
            title="Minimalist Watches" 
            price={9150} 
            image={acimages5} 
            rating={5} 
            />
        </div>

      </div>
    </div>
  );
}

export default Home;

// import React from 'react'

// function Home() {
//     let lin1=[Kurtas,Sarees,Dresses,Kurtas,Long]
//     let lin2=[Jwellery,Tops,Handbag,Trackpant,Wplus]
//     let lin3=[Tshirt,Longwear,Shirts,Inner,Trac]
//     let lin4=[FlipFlops, Shorts,SportsShoes,Kurtasmen,Suits]

//     const history=useHistory()

//     return (
//         <div>
//         <div className={styles.dealsdiv2}>
//             {lin1.map((item,j)=>(<div key={j}>
//                 <img className={styles.dealsimg} src={item} alt="" />
//             </div>))}
//             <Product 
//             id = "7"
//             title="Shirt7" 
//             price={20.5} 
//             // image={item} 
//             rating={5} 
//             />
//         </div>
//         <div className={styles.dealsdiv2}>
//             {lin2.map((item,j)=>(<div key={j}>
//                 <img className={styles.dealsimg} src={item} alt="" />
//             </div>))}
//         </div>
//         <img className={styles.spotimg2} src={ForHim} alt="" />
//         <div className={styles.dealsdiv2}>
//             {lin3.map((item,j)=>(<div onClick={()=>history.push("./result")} key={j}>
//                 <img className={styles.dealsimg} src={item} alt="" />
//             </div>))}
//         </div>
//         <div className={styles.dealsdiv2}>
//             {lin4.map((item,j)=>(<div key={j}>
//                 <img className={styles.dealsimg} src={item} alt="" />
//             </div>))}
//         </div>
//         </div>
//     )
// }

// export default Home;
