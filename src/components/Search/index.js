import { useState } from "react";
import logo2 from "../../images/logo-large.png";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    props.callback(`${searchValue}`);
  }

  return (
    <>
      <img src={logo2}></img>
      <input
        type="text"
        placeholder="Buscar producto..."
        defaultValue={inputValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleClick}>Buscar</button>
    </>
  );
}

export default Search;
