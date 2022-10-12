import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const EmployeesContext = createContext("");

export function EmployeesProvider(props) {
  const [newEmployee, setNewEmployee] = useState([]);

  axios.defaults.baseURL = "http://localhost:3000/";

  useEffect(() => {
    axios.get("/").then((response) => {
      setNewEmployee(response.data);
    });
  }, []);

  const [empContext, setEmpContext] = useState("");

  const clickHandler = (id) => {
    console.log("button clicked", id);
    setEmpContext(id);
  };

  return (
    <EmployeesContext.Provider
      value={{
        newEmployee,
        clickHandler,
        empContext,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
}

export default EmployeesContext;
