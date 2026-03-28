import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero">

   
      <div className="top-buttons">
        <button className="trial-btn">Start your free trial</button>

        <button
          className="watch-btn"
          onClick={() => setIsOpen(true)}
        >
          ▶ Watch video
        </button>
      </div>


      <div className="video-box">
        <div
          className="play-card"
          onClick={() => setIsOpen(true)}
        >
          <img className="play-icon" src="./img/toxta.png" alt="" />

          <div>
            <h4 className="int">Watch introduce video</h4>
            <p className="mn">5 mins • <span className="eo">Play video</span></p>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setIsOpen(false)}>
              ✖
            </span>

            <iframe
              src="https://www.youtube.com/embed/i24GQAhdvoE"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;