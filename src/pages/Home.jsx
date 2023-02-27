import React from "react";
import Main from "./Main";
import pizzas from "../pizzas.json";
function Home() {
  return (
    <div className="content__items">
      {pizzas.map((obj) => (
        <Main key={obj.id} {...obj} />
      ))}
    </div>
  );
}

export default Home;
