import { useState } from "react";
import logo2 from "../../images/logo-large.png";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleCallback() {
    props.callback(`${searchValue}`);
    setSearchValue("");
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleCallback();
    }
  }

  return (
    <div className={style.header}>
      <Link to={`/`}>
        <img alt="banner" src={logo2} className={style.banner} />
      </Link>
      <div className={style.searchbar}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleEnter}
          className={style.input}
        />
        <button className={style.button} onClick={handleCallback}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Search;
