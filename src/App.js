import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { EmployeesContextProvider } from "./context/EmployeesContext";
import {InventoriesContextProvider } from "./context/InventoriesContext";
import PointOfSale from "./pages/PointOfSale/PointOfSale";
import Inventories from "./pages/Inventories/Inventories";
import Sales from "./pages/Sales/Sales";
import Stores from "./pages/Stores/Stores";
import Employees from "./pages/Employees/Employees";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";

function App() {
  return (
    <div className="App">





      <BrowserRouter>
        <EmployeesContextProvider>
          <InventoriesContextProvider>

            <Navbar />
            <Routes>
              <Route path="/" element={<PointOfSale />} />

              <Route path="/stores" element={<Stores />} >
                <Route path=":stores" element={<Stores />} />
              </Route>

              <Route path="/sales" element={<Sales />} >
                <Route path=":sales" element={<Sales />} />
              </Route>

              <Route path="/inventories" element={<Inventories />} >
                {/* <Route path=":inventory" element={<Inventory />} /> */}
              </Route>

              <Route path="/employees" element={<Employees />} >
                <Route path=":employeeId" element={<EmployeeDetails />} />
              </Route>
              {/* <Route path="/login" element={<LoginSignUp />} /> */}
              <Route />
            </Routes>
          </InventoriesContextProvider>
        </EmployeesContextProvider>
        {/* <Footer /> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
