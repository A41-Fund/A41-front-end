import React from "react";
import "./FundRecordDetail.css";

const FundRecordDetail = ({ record }) => {
  const { purpose, amount, username, attachments } = record;

  return (
    <div className="fund-record-detail">
      <h1>Record Details</h1>
      <div className="record-info">
        <div className="info-item">
          <strong>Purpose:</strong>
          <p>{purpose}</p>
        </div>
        <div className="info-item">
          <strong>Amount of Money:</strong>
          <p>{amount} VND</p>
        </div>
        <div className="info-item">
          <strong>Username:</strong>
          <p>{username}</p>
        </div>
        <div className="info-item">
          <strong>Evidence:</strong>
          <div className="attachment-list">
            {attachments.map((attachment, index) => (
              <div className="attachment-item" key={index}>
                <img src={attachment} alt={`Attachment ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundRecordDetail;
