import "./App.css";
import { useState } from "react";
import axios from "axios";

export const MyHeader = () => {
  return <h1 className="header">Theyroux Council</h1>;
};

export const MyForm = () => {
  const [input, setInput] = useState({
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newForm = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      bday: input.bday,
      gender: input.gender,
      role: input.role,
      department: input.department,
      salary: input.salary,
      taxID: input.taxID,
      insuranceID: input.insuranceID,
    };
    console.log(input);

    const options = {
      url: "http://localhost:3001/create",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(newForm),
    };
    axios(options)
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form action="/theyrouxCouncil/forms" method="POST">
        <label>First Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          value={input.firstName}
          maxLength="50"
          minLength="1"
        />
        <label>Last Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          value={input.lastName}
          maxLength="50"
          minLength="1"
        />
        <label>Email address:</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={input.email}
          maxLength="50"
          minLength="1"
        />
        <label>Date of Birth:</label>
        <input
          onChange={handleChange}
          type="date"
          name="bday"
          value={input.bday}
        />
        <label>Gender:</label>
        <input
          onChange={handleChange}
          type="text"
          name="gender"
          value={input.gender}
        />
        <label>Role:</label>
        <input
          onChange={handleChange}
          type="text"
          name="role"
          value={input.role}
          maxLength="50"
          minLength="1"
        />
        <label>Department:</label>
        <input
          onChange={handleChange}
          type="text"
          name="department"
          value={input.department}
          maxLength="50"
          minLength="1"
        />
        <label>Salary:</label>
        <input
          onChange={handleChange}
          type="number"
          name="salary"
          value={input.salary}
        />
        <label>Tax ID:</label>
        <input
          onChange={handleChange}
          type="text"
          name="taxID"
          value={input.taxID}
          maxLength="10"
        />
        <label>Insurance ID:</label>
        <input
          onChange={handleChange}
          type="text"
          name="insuranceID"
          value={input.insuranceID}
          maxLength="10"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};
