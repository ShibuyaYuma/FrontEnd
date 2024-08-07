import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <p className="TopName">
        期間限定トライアルセット販売中✨&emsp;
        <span>
          <a href="https://www.google.co.jp/" target="_blank">
            詳細はこちら→
          </a>
        </span>
      </p>
      <div className="Navigation">
        <img src="./src/img/logo.png" alt="logo" className="logo" />
        <ui className="nav">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">
              <box-icon name='cart'></box-icon>
            </a>
          </li>
        </ui>
      </div>
    </nav>
  );
};

export default Navigation;
