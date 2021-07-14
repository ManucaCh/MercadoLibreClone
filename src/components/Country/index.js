import { Link } from "react-router-dom";
import style from "./style.module.scss";

function Country(props) {
  const { flag, country, id } = props;

  return (
    <Link to={`/carousel/${id}`}>
      <li className={style.countries}>
        <img src={`/Flags/${flag}.png`} alt="flag" />
        <p>{country}</p>
      </li>
    </Link>
  );
}

export default Country;
