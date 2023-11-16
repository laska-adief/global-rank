"use client";

import { useState } from "react";

import ButtonHeadingTable from "../ButtonHeadingTable/ButtonHeadingTable";
import SearchInput from "../SearchInput/SearchInput";
import Counts from "../Counts/Counts";
import { useRouter } from "next/navigation";

const orderBy = (countries: any, value: string, direction: string) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => {
      const valueA = getValue(a, value);
      const valueB = getValue(b, value);

      return valueA > valueB ? 1 : -1;
    });
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => {
      const valueA = getValue(a, value);
      const valueB = getValue(b, value);

      return valueA > valueB ? -1 : 1;
    });
  }

  return countries;
};

// Helper function to get nested property value
const getValue = (obj: any, path: string) => {
  const properties = path.split(".");
  return properties.reduce((acc, property) => acc[property], obj);
};

const formattedNumber = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
const CountryTable = ({ countries }: any) => {
  const route = useRouter();
  const [value, setValue] = useState("");
  const [direction, setDirection] = useState("");
  const [keyword, setKeyword] = useState("");

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("asc");
    } else if (direction === "asc") {
      setDirection("desc");
    } else {
      setDirection("");
    }
  };

  const handleSortingFilter = (value: string) => {
    setValue(value);
    switchDirection();
  };

  const filteredCountries = orderedCountries.filter((country: any) => {
    const commonName = country.name.common.toLowerCase();
    const capital = Array.isArray(country.capital) ? country.capital.join(", ").toLowerCase() : "";
    return commonName.includes(keyword) || capital.includes(keyword);
  });

  const handleChangeInput = (e: any) => {
    setKeyword(e.target.value.toLowerCase());
  };

  const counts = filteredCountries && filteredCountries?.length ? filteredCountries?.length : 0;

  return (
    <div>
      <Counts count={counts} />
      <SearchInput placeholder="Filter by Name or Capital" onChange={handleChangeInput} />

      <div className="flex gap-3">
        <ButtonHeadingTable text="Name" handleSorting={() => handleSortingFilter("name.common")} direction={direction} />
        <ButtonHeadingTable text="Population" handleSorting={() => handleSortingFilter("population")} direction={direction} />
        <ButtonHeadingTable text="Capital" handleSorting={() => handleSortingFilter("capital")} direction={direction} />
      </div>

      {filteredCountries && filteredCountries?.length > 0
        ? filteredCountries.map((country: any, i: number) => (
            <div
              key={i}
              className="flex items-center gap-3 mb-4 bg-white p-4 shadow-sm rounded-md text-normal font-semibold transition-all hover:shadow-md hover:-translate-x-1">
              <div className="text-center flex-1 break-all">{country?.name?.common}</div>
              <div className="text-center flex-1 break-all">{formattedNumber(country?.population)}</div>
              <div className="text-center flex-1 break-all">{country?.capital}</div>
            </div>
          ))
        : "no data found"}
    </div>
  );
};
export default CountryTable;
