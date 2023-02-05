import React from "react";
import "../AboutUs/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          omnis explicabo accusamus eligendi. Sint, aliquid! Itaque, minus natus
          totam assumenda explicabo omnis facilis alias. Praesentium architecto
          perspiciatis ullam fugiat ut?
        </p>

        <button className="btn">VIEW MORE ABOUT US</button>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack bottom">
            <img
              src="https://onecms-res.cloudinary.com/image/upload/s--cVTi5BIJ--/c_crop,h_540,w_720,x_99,y_0/c_fill,g_auto,h_622,w_830/f_auto,q_auto/v1/cna-migration/hero-istock.jpg?itok=F6ZSD5wX"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
