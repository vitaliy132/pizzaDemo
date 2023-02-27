import React from "react";
import Main from "./Main";
import { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://63f4a86f2213ed989c479c95.mockapi.io/Items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <div className="content__items">
      {items.map((obj) => (
        <Main key={obj.id} {...obj} />
      ))}
    </div>
  );
}

export default Home;
