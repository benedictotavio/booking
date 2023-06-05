import "./navbar.css"
import {
  faChessKing
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          Boo <FontAwesomeIcon icon={faChessKing} /> King
        </span>
        <div className="navItems">
          <button className="navButton">Registre-se</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar