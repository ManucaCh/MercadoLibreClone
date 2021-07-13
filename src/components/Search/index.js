import { useState } from "react";
import logo2 from "../../images/logo-large.png";
import { Link } from "react-router-dom";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleCallback() {
    props.callback(`${searchValue}`);
    console.log(searchValue);
    setSearchValue("");
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleCallback();
    }
  }

  return (
    <>
      <Link to={`/`}>
        <img alt="banner" src={logo2} />
      </Link>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleEnter}
      />
      <button onClick={handleCallback}>Buscar</button>
    </>
  );
}

export default Search;
