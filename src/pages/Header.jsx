import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src="./pizza-logo.svg" alt="Pizza logo" />
              <div>
                <h1>Pizza</h1>
                <p>The Most Delicious Pizza in the Universe</p>
              </div>
            </div>
          </Link>
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>520 UAH</span>
              <div className="button__delimiter"></div>

              <span>3</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
