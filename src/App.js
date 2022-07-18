import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilter = (event) => {
    // console.log(event.target.value);
    setFilter(event.target.value);
    if (filter) {
      const regex = new RegExp(Filter, "i");
      const filteredCountries = () =>
        countries.filter((country) => country.name.common.match(regex));
      setCountries(filteredCountries);
    }
  };

  return (
    <div className="App">
      <Filter filter={filter} handleFilter={handleFilter} />
      <Countries countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
