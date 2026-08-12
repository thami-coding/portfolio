import "./project-card.css";
import { useRef } from "react";
import { BiCheck } from "react-icons/bi";
import { TbWorldCheck } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function Project({ features, stack, img, githubLink, projectLink, isLive }) {
  const videoRef = useRef(null);
  console.log(img);

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

  return (
    <div className="project-card" data-aos="zoom-in">
      <div className="project-card-img-container">
        <img src={img} className="project-car-img" />
        <div className="demo">
          {isLive && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link"
            >
              <TbWorldCheck />
              <span> Live Demo</span>
            </a>
          )}
          <a
            className="github"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> Github</span>
          </a>
        </div>
      </div>
      <div className="project-text-container">
        <h3 className="project-features">Key Features</h3>
        <ul className="feature-check">
          {features.map((feature, index) => (
            <li key={index}>
              {" "}
              <BiCheck /> {feature}
            </li>
          ))}
        </ul>
        <div>
          <h2 className="tech-stack-title">Tech Stack</h2>
          <ul className="tech-stack">
            {stack.icons.map((icon, index) => (
              <li className="icon-size" key={index}>
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
