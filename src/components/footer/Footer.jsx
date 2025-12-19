import "./footer.css";
import { LiaCopyright } from "react-icons/lia";
function footer() {
  return (
    <div className="footer">
      <LiaCopyright /> <p> {new Date().getFullYear()} all rights reserved</p>
      
    </div>
  );
}

export default footer;
