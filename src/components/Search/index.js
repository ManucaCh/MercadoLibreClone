import { useState } from "react";
import logo2 from "../../images/logo-large.png";

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
      <img alt="banner" src={logo2}></img>
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
