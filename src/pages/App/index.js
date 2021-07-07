import Country from "../../components/Country";
import logo from "../../images/logo.png";
import countries from "./countrys.json";

function App() {
  return (
    <>
      <div className="home">
        <img src={logo} alt="logo" className="appLogo"></img>
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
