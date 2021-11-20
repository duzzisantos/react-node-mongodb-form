import React, {useState, useEffect} from "react";
import "./App.css";

export const DisplayData = () => {
  const [display, setDisplay] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      bday: "",
      gender: "",
      role: "",
      department: "",
      salary: 0,
      taxID: "",
      insuranceID: "",
    },
  ]);

  useEffect(() => {
    fetch("/display")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setDisplay(jsonRes));
  });
  return (
    <section className="container">
      {display.map((displays) => (
        <>
          <ul>
            <li>{displays.firstName}</li>
            <li>{displays.lastName}</li>
            <li>{displays.email}</li>
            <li>{displays.bday}</li>
            <li>{displays.gender}</li>
            <li>{displays.role}</li>
            <li>{displays.department}</li>
            <li>{displays.salary}</li>
            <li>{displays.taxID}</li>
            <li>{displays.insuranceID}</li>
          </ul>
        </>
      ))}
    </section>
  );
};
