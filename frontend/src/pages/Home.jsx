import React from "react";
import Hero from "../component/hero";
import Brand from "../component/brand";
import Stats from "../component/stat";
import Pricing from "../component/pricing";
import App from "../component/app";
import Cta from "../component/CallToAction";
import { Footer } from "../component/footer";
import SearchBar from "../component/BarSearch";

const Home = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      {/* <SearchBar placeholder="Search for products..." onSearch={handleSearch} /> */}

      <Hero />
      <Brand />
      <Pricing />
      <Stats />
      <App />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
