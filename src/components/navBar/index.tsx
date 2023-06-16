import Style from "./Navbar.module.scss";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faStairs } from "@fortawesome/free-solid-svg-icons";

// https://fontawesome.com/search?p=8&o=r&s=solid

type Info = {
  key: string;
  label: string;
  addr: string;
  icon: any;
};

const Navbar = () => {
  const components: Info[] = [
    {
      key: "comp1",
      label: "무한스크롤",
      addr: "/infinity",
      icon: faStairs,
    },
  ];
  const app: Info[] = [
    { key: "app1", label: "To do list", addr: "/", icon: faList },
  ];

  return (
    <div className={Style.navContainer}>
      <h2 className={Style.title}>MINI-APP-BY-REACT</h2>
      <ul className={Style.listContainer}>
        <MenuItem key="home" label="Home" addr="/" icon={faHome} />
        <li className={Style.subTitle}>Components</li>
        {components.map((component) => {
          return (
            <MenuItem
              key={component.key}
              label={component.label}
              addr={component.addr}
              icon={component.icon}
            />
          );
        })}
        <li className={Style.subTitle}>Mini app</li>
        {app.map((component) => {
          return (
            <MenuItem
              key={component.key}
              label={component.label}
              addr={component.addr}
              icon={component.icon}
            />
          );
        })}
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
