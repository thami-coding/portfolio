import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Icons() {
  return (
    <div className="contact-icons">
      <a className="link" href="https://github.com/thami-coding" target="_blank"> <SiGithub className="contact-icon" /></a>
      <a className="link" href="https://www.linkedin.com/in/thamsanqa-gumede-5aa461319/" target="_blank">  <FaLinkedin className="contact-icon" /></a>
      <a className="link" href="mailto:thamig125@gmal.com"><MdEmail className="contact-icon" /></a>


    </div>
  )
}

export default Icons
