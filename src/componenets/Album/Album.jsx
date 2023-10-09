import React from "react";
import Image1 from "./image-1.jpg";
import "./Album.css";
const Album = () => {
  return (
    <>
      <section id="services">
          <div className="child__2">
            <div className="item">
              <p>Reusable water bottle</p>
              <img src={Image1} alt="Image2" />
            </div>
            <div className="item">
              <p>Bamboo utensils</p>
              <img src={Image1} alt="Image2" />
            </div>
            <div className="item">
              <p>Bamboo grocery bag</p>
              <img src={Image1} alt="Image2" />
            </div>
            <div className="item">
              <p>Eco freindly notebook</p>
              <img src={Image1} alt="Image2" />
            </div>
            <div className="item">
              <p>Solar powered charged</p>
              <img src={Image1} alt="Image2" />
            </div>
          </div>
      </section>
    </>
  );
};

export default Album;
