import React from "react";
import  Hero  from "../component/Hero";
import  CountryCard   from "../component/CountryCard";
// import { Carousels } from "../components/Carousel";
import  BookTicket  from "../component/BookTicket";
import  Contact  from "../component/Contact";
const Home = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <Hero />
      <CountryCard />
      <BookTicket />
      <Contact />
      {/* <Carousels /> */}
    </div>
  );
};

export default Home;
