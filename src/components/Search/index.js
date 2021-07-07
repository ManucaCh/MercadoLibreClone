import { useState } from "react";
import logo2 from "../../images/logo-large.png";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  function handleClick() {
    setSearchValue(() => ;
  }

  return (
    <>
      <img src={logo2}></img>
      <input type="text" placeholder="Buscar producto..." defaultValue="" />
      <button onClick={handleClick}>Buscar</button>
    </>
  );
}

export default Search;
