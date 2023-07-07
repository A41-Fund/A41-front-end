import React from 'react';
import "./SpendingDetail.css"

const SpendingDetail = ({ purpose, cost, availableFunds, deadline, yesVotes, noVotes }) => {

  return (
    <div className="voting-card-detail">
      <h2>Card Details</h2>
      <div className="detail-info">
        <div className='info-item'>
          <strong>Purpose:</strong>
          <p>{purpose}</p>
        </div>
        <div className='info-item'>
          <strong>Cost:</strong>
          <p>{cost}</p>
        </div>
        <div className='info-item'>
          <strong>Available Funds:</strong>
          <p>{availableFunds}</p>
        </div>
        <div className='info-item'>
          <strong>Deadline:</strong>
          <p>{deadline}</p>
        </div>
        <div className="vote-summary">
          <div className="vote-item">
            <strong>Yes Votes:</strong>
            <p>{yesVotes}</p>
          </div>
          <div className="vote-item">
            <strong>No Votes:</strong>
            <p>{noVotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingDetail;
