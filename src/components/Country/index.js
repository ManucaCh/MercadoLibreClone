import { Link } from "react-router-dom";

function Country(props) {
  const { flag, country, id } = props;

  return (
    <Link to={`/carousel/${id}`}>
      <li>
        <img src={`/Flags/${flag}.png`} />
        <p>{country}</p>
      </li>
    </Link>
  );
}

export default Country;
