import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import AboutPizza from "./components/About";
import PizzaTypes from "./components/PizzaTypes";
import Items from "./components/Items";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <AboutPizza />
        <Items />
        <PizzaTypes />
        <Footer />
      </div>
    );
  }
}

export default App;
