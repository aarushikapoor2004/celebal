import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = {
  India: ["Delhi", "Mumbai", "Bangalore"],
  USA: ["New York", "San Francisco", "Chicago"],
};

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    phoneCode: "+91",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "First Name required";
    if (!formData.lastName.trim()) errs.lastName = "Last Name required";
    if (!formData.username.trim()) errs.username = "Username required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid Email";
    if (formData.password.length < 6) errs.password = "Min 6 characters";
    if (!/^\d{10}$/.test(formData.phoneNumber))
      errs.phoneNumber = "Invalid Number";
    if (!formData.country) errs.country = "Country required";
    if (!formData.city) errs.city = "City required";
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) errs.pan = "Invalid PAN";
    if (!/^\d{12}$/.test(formData.aadhar)) errs.aadhar = "Invalid Aadhar";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form Validation</h2>

      <input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
      />
      <p>{errors.firstName}</p>

      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <p>{errors.lastName}</p>

      <input name="username" placeholder="Username" onChange={handleChange} />
      <p>{errors.username}</p>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <p>{errors.email}</p>

      <input
        type={formData.showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <label>
        <input type="checkbox" name="showPassword" onChange={handleChange} />{" "}
        Show Password
      </label>
      <p>{errors.password}</p>

      <select
        name="phoneCode"
        value={formData.phoneCode}
        onChange={handleChange}
      >
        <option value="+91">+91</option>
        <option value="+1">+1</option>
      </select>
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <p>{errors.phoneNumber}</p>

      <select name="country" onChange={handleChange}>
        <option value="">Select Country</option>
        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <p>{errors.country}</p>

      <select name="city" onChange={handleChange}>
        <option value="">Select City</option>
        {countries[formData.country]?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p>{errors.city}</p>

      <input name="pan" placeholder="PAN Number" onChange={handleChange} />
      <p>{errors.pan}</p>

      <input
        name="aadhar"
        placeholder="Aadhar Number"
        onChange={handleChange}
      />
      <p>{errors.aadhar}</p>

      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
    </form>
  );
}

export default Form;
