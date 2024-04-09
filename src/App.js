import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PointOfSale from "./pages/PointOfSale/PointOfSale";
import Stores from "./pages/Stores/Stores";
import Managers from "./pages/Managers/Managers";
import Employees from "./pages/Employees/Employees";
import Inventories from "./pages/Inventories/Inventories";
import Sales from "./pages/Sales/Sales";
import { StoresContextProvider } from "./context/StoresContext";
import { ManagersContextProvider } from "./context/ManagersContext";
import { EmployeesContextProvider } from "./context/EmployeesContext";
import { InventoriesContextProvider } from "./context/InventoriesContext";
import { SalesContextProvider } from "./context/SalesContext";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <StoresContextProvider>
          <ManagersContextProvider>
            <EmployeesContextProvider>
              <InventoriesContextProvider>
                <SalesContextProvider>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<>
                      <Link to="/stores">
                        <Stores />
                      </Link>
                      <hr />
                      <Link to="/managers">
                        <Managers />
                      </Link>
                      <hr />
                      <Link to="/employees">
                        <Employees />
                      </Link>
                      <Link to="/inventories">
                        <Inventories />
                        <hr />
                      </Link>
                      <Link to="/sales">
                        <Sales />
                        <hr />
                      </Link>
                    </>} />

                    <Route path="/stores" element={<Stores />} >
                      <Route path=":stores" element={<Stores />} />
                    </Route>

                    <Route path="/managers" element={<Managers />} >
                      <Route path=":managers" element={<Managers />} />
                    </Route>

                    <Route path="/sales" element={<Sales />} >
                      <Route path=":sales" element={<Sales />} />
                    </Route>

                    <Route path="/inventories" element={<Inventories />} >
                      {/* <Route path=":inventory" element={<Inventory />} /> */}
                    </Route>

                    <Route path="/employees" element={<Employees />} >
                      {/* <Route path=":employeeId" element={<EmployeeDetails />} /> */}
                    </Route>
                    {/* <Route path="/login" element={<LoginSignUp />} /> */}
                    <Route />
                  </Routes>
                </SalesContextProvider>
              </InventoriesContextProvider>
            </EmployeesContextProvider>
          </ManagersContextProvider>
        </StoresContextProvider>
        {/* <Footer /> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
