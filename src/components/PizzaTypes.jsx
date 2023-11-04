import React from "react";
import Items from "./Items";

class PizzaTypes extends React.Component {
  render() {
    return (
      <div className="container pizza-types responsive">
        <div className="row">
          <h3 className="text-center">Pizza Types</h3>

          <Items
            imgSrc="images/small-1.jpg"
            title="Perpperoni"
            text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                quasi, nam perspiciatis architecto iusto eaque aspernatur illum
                perferendis. Quidem assumenda deserunt sint, provident
                laudantium dicta? Itaque veritatis explicabo eius cumque."
          />

          <Items
            imgSrc="images/small 4.jpg"
            title="Vegetable Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          quasi, nam perspiciatis architecto iusto eaque aspernatur illum
          perferendis. Quidem assumenda deserunt sint, provident
          laudantium dicta? Itaque veritatis explicabo eius cumque."
          />

          <Items
            imgSrc="images/small 5.jpg"
            title="Cheese Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          quasi, nam perspiciatis architecto iusto eaque aspernatur illum
          perferendis. Quidem assumenda deserunt sint, provident
          laudantium dicta? Itaque veritatis explicabo eius cumque."
          />

          <Items
            imgSrc="images/small 3.jpg"
            title="Teasty Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                quasi, nam perspiciatis architecto iusto eaque aspernatur illum
                perferendis. Quidem assumenda deserunt sint, provident
                laudantium dicta? Itaque veritatis explicabo eius cumque."
          />
        </div>
      </div>
    );
  }
}

export default PizzaTypes;
