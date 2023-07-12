import React, { useState } from "react";
import Button from "../components/button/Button";
import "../FundRecored/FundRecorded.css";
import SpendRequestLogo from "./SpendRequestLogo.svg"
import Navbar from "../components/navbar/Navbar"



function SpendingRequestForm() {
  const [formData, setFormData] = useState({
    purpose: "",
    amount: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data processing here
    console.log(formData);
    // Reset the form
    setFormData({
      purpose: "",
      amount: "",
      deadline: "",
    });
  };

  return (
    <div className="fund-record-form">
      <div className="form-container">
        <h1>Spending Request Form</h1>
        
        <div className="split-container">

          <div className="left-div">
            <img src={SpendRequestLogo} alt="React Logo" />
          </div>

          <div className="right-div">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="purpose">Spending Purpose:</label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  className="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="amount">Amount of Money:</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="deadline">Deadline:</label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="requestDate"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
              <Button />
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SpendingRequestForm;
