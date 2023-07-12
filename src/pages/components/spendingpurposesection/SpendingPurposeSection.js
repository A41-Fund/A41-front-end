import React, { useState } from "react";
import "./SpendingPurposeSection.css";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
import FundSpendVotingCard from "../spendingpurposetab/SpendingPurposeTab";

const VotingCardSection = () => {
  const mockData = [
    {
      purpose: "Purpose 1 Purpose 1  Purpose  Purpose 1 Purpose 1 Purpose 1",
      cost: "$1000",
      availableFunds: "$5000",
      deadline: "2023-07-31",
    },
    {
      purpose: "Purpose 2",
      cost: "$2000",
      availableFunds: "$3000",
      deadline: "2023-08-15",
    },
    {
      purpose: "Purpose 3",
      cost: "$1500",
      availableFunds: "$2000",
      deadline: "2023-08-30",
    },
    {
      purpose: "Purpose 3",
      cost: "$1500",
      availableFunds: "$2000",
      deadline: "2023-08-30",
    },
  ];

  const maxCardsToShow = 3;
  const visibleCards = mockData.slice(0, maxCardsToShow);

  return (
    <section className="voting-card-section">
      <h1>AVAILABLE SPENDING PURPOSE</h1>
      <div className="voting-card-container">
        {visibleCards.map((data, index) => (
          <FundSpendVotingCard key={index} {...data} />
        ))}
      </div>
      {mockData.length > maxCardsToShow && (
        <div className="view-more-button-container">
          {/* <Link to="/" className="view-more-button">
            View More
          </Link> */}
          <button className="view-more-button">View More</button>
        </div>
      )}
    </section>
  );
};

export default VotingCardSection;
