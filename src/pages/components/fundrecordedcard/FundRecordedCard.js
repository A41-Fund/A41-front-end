import React from "react";
import "./FundRecordedCard.css";


const FundRecordCard = ({ avatar, username, amount }) => {
  return (
    <div className="fund-record">
      <div className="avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
      <div className="user-details">
        <h3>{username}</h3>
        <p className="cost">+ {amount} VND</p>
      </div>
    </div>
  );
};

export default FundRecordCard;
