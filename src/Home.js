import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  const  [{basket, user }, dispatch] = useStateValue();
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71XGL9CLj8L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1234567"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2032/2019/02/The-lean-img.png"
            rating={5}
          />
          <Product
            id="1234568"
            title="Lab Series Aramis Lab Series Treat Pro Ls All in one Face Treatment For 1.7 OZ"
            price={34.09}
            image="https://i5.walmartimages.com/asr/224425cb-7241-42f4-ad1b-fccad0bf7e06.5f9bd757473ee027b9b6fdd8d7681e9f.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1234569"
            title="Apple Watch Series 7 GPS, 41mm Midnight Aluminum Case with Midnight Sport Band - Regular"
            price={344.99}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/38-alu-space-sport-black-nc-1up?wid=940&hei=1112&fmt=png-alpha&.v=1594318693000"
            rating={3}
          />
          <Product
            id="1234560"
            title="2 PACK Anti Glare Screen Protector Compatible with 2020 2019 2018 Newest MacBook Air 13 with Touch ID Version A1932 A2179 A2337, Anti-scratch Anti-fingerprint(Matte)"
            price={9.29}
            image="https://m.media-amazon.com/images/I/71f03hsFLrL._AC_SL1500_.jpg"
            rating={1}
          />
          <Product
            id="1234510"
            title="Kryptonite Keeper 12mm U-Lock with FlexFrame-U Bracket"
            price={44.95}
            image="https://m.media-amazon.com/images/I/61N7dvvQcUS._AC_SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1234509"
            title="Introducing Amazon Fire TV 43 4-Series 4K UHD smart TV"
            price={255.99}
            image="https://m.media-amazon.com/images/I/61PrMW29K9L._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
