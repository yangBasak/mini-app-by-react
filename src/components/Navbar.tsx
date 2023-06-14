import { Link } from "react-router-dom";
import Style from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={Style.navContainer}>
      <h2 className={Style.title}>MINI-APP-BY-REACT</h2>
      <ul className={Style.listContainer}>
        <li>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/">Home</Link>
        </li>
        <li className={Style.subTitle}>Components</li>
        <li>
          <span>아</span>
          <Link to="/">페이지네이션</Link>
        </li>
        <li>
          <span>아</span>
          <Link to="/infinity">무한스크롤</Link>
        </li>
        <li className={Style.subTitle}>Mini app</li>
        <li>
          <span>아</span>
          <Link to="/">to do List</Link>
        </li>
        <li>
          <span>아</span>
          <Link to="/">home</Link>
        </li>
      </ul>
      <div className={Style.footer}>
        <img src="../assets/profile.png" alt="profile" />
        <dl>
          <dt>YangBasak</dt>
          <dd>FE Develope</dd>
        </dl>
      </div>
    </div>
  );
};

export default Navbar;
