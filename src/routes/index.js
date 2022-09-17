import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Settings from "../pages/settings";
import Configuration from "../pages/configuration";
import Labor from "../pages/labor";
import Transportation from "../pages/transportation";
import Work from "../pages/work";
import { TemplateData as tdata } from "../data/dummy";
import Personal from "../pages/personal";
import Messages from "../pages/messages";

const Router = () => {
  const [selected, setSelected] = useState("1");
  const [TemplateData, setTemplateData] = useState(tdata);
  const [RolesData, setRolesData] = useState([]);
  const [employeeData, setemployeeData] = useState([
    {
      Id: 1,
      Email: "test@test.com",
      FirstName: "Erica",
      LastName: "Smith",
      LoadedCost: "500",
      LoadedHour: "3000",
      Name: "Erica Smith",
      price: 50,
      img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      Id: 2,
      Email: "test@test.com",
      FirstName: "Ellise",
      LastName: "Wheeler",
      LoadedCost: "500",
      LoadedHour: "3000",
      Name: "Ellise Wheeler",
      price: 45,
      img: "https://previews.123rf.com/images/dragonimages/dragonimages1611/dragonimages161100413/66967368-portrait-of-a-pretty-young-female-employee.jpg",
    },
    {
      Id: 3,
      Email: "test@test.com",
      FirstName: "Edward",
      LastName: "Kenway",
      LoadedCost: "500",
      LoadedHour: "3000",
      Name: "Edward Kenyway",
      price: 40,
      img: "https://www.davd.photo/wp-content/uploads/2019/03/rocco-roxie-employee-headshots-4.jpg",
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/personal"
          element={<Personal selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/message"
          element={<Messages selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/settings"
          element={<Settings selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/work"
          element={<Work selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/transportation"
          element={
            <Transportation selected={selected} setSelected={setSelected} />
          }
        />
        <Route
          path="/labor"
          element={
            <Labor
              selected={selected}
              setSelected={setSelected}
              TemplateData={TemplateData}
              setTemplateData={setTemplateData}
              RolesData={RolesData}
              setRolesData={setRolesData}
              employeeData={employeeData}
            />
          }
        />
        <Route
          path="/configuration"
          element={
            <Configuration selected={selected} setSelected={setSelected} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
