const Countries = ({ countries, setCountries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (
    (countries.length > 2 && countries.length < 10) ||
    countries.length === 0
  ) {
    return (
      <ul>
        {countries.map((country, i) => (
          <li key={i}>
            {" "}
            {country.name.common}{" "}
            <button onClick={() => setCountries([country.name.common])}>
              show
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <div> {countries[0]} </div>;
  }
};

export default Countries;
