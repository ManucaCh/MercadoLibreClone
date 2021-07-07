import { useState } from "react";
import logo2 from "../../images/logo-large.png";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    console.log(searchValue, inputValue);
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