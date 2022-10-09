import React from "react";
import "./App.css";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import { EmployeesProvider } from "./Employees";
import EmployeeProfile from "./EmployeeProfile";
import { Banner, StaticBanner } from "material-ui-banner";
import Search from "./Search";

export default function App() {
  return (
    <React.Fragment>
      <EmployeesProvider>
        <header>
          <b>Employee Management Portal</b>
        </header>

        <div className="app">
          <div className="homePage">
            <div>
              <Header headerValue="Employee Directory" />
            </div>
            <div>
              <Search />
            </div>
            <div className="employeeListWrapper ">
              <div className="employeeList ">
                <EmployeeList />
              </div>
            </div>
          </div>
          <div className="employeePage">
            <div>
              <Header headerValue="Employees" />
            </div>
            <div className="employeeProfile">
              <EmployeeProfile />
            </div>
          </div>
        </div>
      </EmployeesProvider>
    </React.Fragment>
  );
}

//export default App;
