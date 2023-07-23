import React from "react";
import "./header.css";
import HeaderImage from '../../components/assets/image-1.png'
import People from '../../components/assets/image-2.png'


const Header = () => {
  return (
    <div className="header-container container" id="header">
      <div className="header-content">
        <div className="headline">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <div className="header-paragraph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, labore! Nostrum aliquid accusantium maiores quos temporibus ducimus eius et earum minus fuga? Autem quia accusamus corrupti aliquam dicta asperiores ex!</p>
        </div>
        <div className="header-form">
          <form action="">
            <input className="header-input" type="text" placeholder="Your Email Address" />
            <button className="btn-input">Get start</button>
          </form>
        </div>
        <div className="headline-bottom">
          <div className="bottom-img">
            <img src={People} alt=""/>
          </div>
        </div>
      </div>
      <div className="header-image">
         <img src={HeaderImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
