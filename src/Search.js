import React from "react";
import { EmployeesContext } from "./Employees";
import { useContext, useState } from "react";

function SearchBar() {
  const { newEmployee } = useContext(EmployeesContext);
  const BarStyling = { width: "26rem", border: "none", padding: "0.5rem" };

  //  console.log("Emp Context ID", EmployeesContext );

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    console.log("search", searchInput);
  };
  const searchName = (id) => {
    setSearchInput(newEmployee.filter((e) => e.id === id));
  };

  return (
    <div className="search">
      <input
        style={BarStyling}
        value={searchInput}
        placeholder={"Search Employees"}
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default SearchBar;
