import React, { useState } from "react";
import Button from "../components/button/Button";
import "./FundRecorded.css";
import FundRecorgedLogo from "./FundRecordedLogo.svg"
import Navbar from "../components/navbar/Navbar"

function FundRecordForm() {
  const [formData, setFormData] = useState({
    purpose: "",
    amount: "",
    username: "",
    attachments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      attachments: files,
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
      username: "",
      attachments: [],
    });
  };

  return (
    <>
    <Navbar/>
    <div className="fund-record-form">
      <div className="form-container">
        <h1>Fund Recording</h1>

        <div className="split-container">

          <div className="left-div">
            <img src={FundRecorgedLogo} alt="React Logo" />
          </div>

          <div className="right-div">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="purpose">Top-up Purpose:</label>
                <textarea
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
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="attachments">Attachments:</label>
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              <Button />
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FundRecordForm;
