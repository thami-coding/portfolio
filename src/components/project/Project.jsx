import { MdOutlineConstruction } from "react-icons/md";
import "./project-card.css";
import { useRef } from "react";
import { LuHardHat } from "react-icons/lu";
import { BiCheck } from "react-icons/bi";

function Project({ name, features, desc, stack }) {

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
console.log(stack);

  return (
    <div className="project-card" data-aos="zoom-in">
      <div className="project-video-container" >
        {/* <video className="project-video"
        ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
          loop
          preload="metadata">
          <source src="/videos/default.mp4" type="video/mp4"></source></video> */}
        <div className="project-video">
          <p >Coming Soon!</p>
          <div>
            <MdOutlineConstruction /><LuHardHat />
          </div>
          <p className="small-text">under construction (let me cook)</p>
        </div>
      </div>
      <div className="project-text-container">
        <h2 className="project-title">{name}</h2>
        <h3 className="project-features">Key Features</h3>
        <ul className="feature-check">
          {features.map((feature, index) => (
            <li key={index}> <BiCheck /> {feature}</li>
          ))}

        </ul>
        <div>
          <h2 className="tech-stack-title">Tech Stack</h2>
          <ul className="tech-stack">
            {stack.icons.map((icon, index) => (<li className="icon-size" key={index}>{icon}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
