import React from "react";
import "./App.css";
import { employeeData } from "./data";

export const Welcome = () => {
  return (
      <>
        <div className="employee-container">
          {employeeData.map((data, key) => {
            return (
              <div key={key}>
                {data.company +
                  " , " +
                  data.country +
                  " ," +
                  data.location +
                  ", " +
                  data.name +
                  ", " + data}
              </div>
            );
          })}
        </div>
      </>
  );
};