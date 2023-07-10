import React, { useState } from "react";
import "./SpendingPurposeTab.css";

const FundSpendVotingCard = ({ purpose, cost, availableFunds, deadline }) => {
  const [vote, setVote] = useState(null);
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  const handleVote = (selectedVote) => {
    if (vote === selectedVote) {
      // Unselect the vote if the same button is clicked again
      setVote(null);
    } else {
      setVote(selectedVote);
      if (selectedVote === "yes") {
        setYesVotes(yesVotes + 1);
      } else {
        setNoVotes(noVotes + 1);
      }
    }
  };

  const calculatePercentage = (votes, totalVotes) => {
    if (totalVotes === 0) {
      return 0;
    }
    return (votes / totalVotes) * 100;
  };

  const totalVotes = yesVotes + noVotes;
  const yesPercentage = calculatePercentage(yesVotes, totalVotes);
  const noPercentage = calculatePercentage(noVotes, totalVotes);

  const fundColor = availableFunds > cost ? " #7BC960" : "#D95D5D";

  const handleIconClick = () => {
    if (vote !== null) {
      setVote(null);
      if (vote === "yes") {
        setYesVotes(yesVotes - 1);
      } else {
        setNoVotes(noVotes - 1);
      }
    }
  };

  return (
    <div className="voting-card">
      <div className="card-information">
        <div className="header">
          <div className="iconContainer" onClick={handleIconClick}>
            <i
              className="icon fa-solid fa-ellipsis-vertical"
              style={{ color: "white", alignSelf: "flex-end" }}
            ></i>
          </div>
          <h4>{purpose}</h4>
        </div>
        <p className="cost">
          <strong>Cost:</strong> {cost}
        </p>
        <p>
          <strong>Available Funds:</strong>{" "}
          <span style={{ color: fundColor }}>{availableFunds}</span>
        </p>
        <p>
          <strong>Deadline:</strong> {deadline}
        </p>
        <div className="voting-summary">
          <div className="percentage-line">
            <h5>Yes</h5>
            <div
              className="percentage-bar"
              style={{ width: `${yesPercentage}%`, background: "#7BC960" }}
            >
              {yesPercentage.toFixed(2)}%
            </div>
          </div>
          <div className="percentage-line">
            <h5>No</h5>
            <div
              className="percentage-bar"
              style={{ width: `${noPercentage}%`, background: "#D95D5D" }}
            >
              {noPercentage.toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="voting-buttons">
          {vote ? (
            <button className="selectedVoteBtn">
              {vote === "yes" ? "Yes" : "No"}
            </button>
          ) : (
            <>
              <button className="agreeBtn" onClick={() => handleVote("yes")}>
                Yes
              </button>
              <button className="denyBtn" onClick={() => handleVote("no")}>
                No
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FundSpendVotingCard;
