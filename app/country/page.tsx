import CountryTable from "../components/CountryTable/CountryTable";

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

const Country = async () => {
  const countries = await getCountries();
  return (
    <div className="min-h-screen container mx-auto px-8">
      <CountryTable countries={countries} />;
    </div>
  );
};
export default Country;
