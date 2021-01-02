import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="Homepage Banner"
        />

        <div className="home_row">
          <Product
            id="1"
            title="Chocolates, sweets & more"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
            price={499}
            rating={4}
          />
          <Product
            id="2"
            title="Laptops"
            image="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
            price={49999}
            rating={5}
             />
              <Product
            id="21"
            title="Discover big ideas from Indian startupss"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Gateway/Nov/Protective1_DT_CC_379X304._SY304_CB417128367_.jpg"
            price={99}
            rating={4}
             />
              <Product
            id="22"
            title="For efficient home working"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
            price={1999}
            rating={4}
             />
        </div>

        <div className="home_row">
          <Product
           id="3"
            title="Up to 30% off | Top mobiles & accessories"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_3._SY116_CB416674425_.jpg"
            price={24999}
            rating={4} />
          <Product
           id="4"
            title="Top picks for your home"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg"
            price={19999}
            rating={3} />
          <Product
           id="5"
            title="Home essentials | Amazon Brands & more"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg"
            price={3999}
            rating={4} />
        </div>

        <div className="home_row">
          <Product
          id="6"
            title="Home essentials | Change the Look"
            image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            price={3999}
            rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;
