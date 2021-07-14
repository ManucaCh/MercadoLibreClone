import Country from "../../components/Country";
import logo from "../../images/logo.png";
import countries from "./countrys.json";
import "../../../src/style.scss";
import style from "./style.module.scss";

function App() {
  return (
    <>
      <div className={style.home}>
        <img src={logo} alt="logo" className={style.applogo}></img>
        <ul>
          {Object.keys(countries).map((country, key) => {
            return (
              <Country
                country={country}
                flag={countries[country].flag}
                id={countries[country].id}
                key={key}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
