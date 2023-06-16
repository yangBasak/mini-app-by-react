import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type InfoProps = {
  label: string;
  addr: string;
  icon: any;
};

const MenuItem = ({ label, addr, icon }: InfoProps) => {
  return (
    <li>
      <FontAwesomeIcon icon={icon} />
      <Link to={addr}>{label}</Link>
    </li>
  );
};

export default MenuItem;
