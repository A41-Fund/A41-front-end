import React from "react";
import FundRecordDetail from "../components/FundRecordDetail/FundRecordDetail"

const FundRecordDetailPage = () => {
  // Assuming you have a record object
  const record = {
    purpose: "Fund for a charity event",
    amount: "100000",
    username: "JohnDoe",
    attachments: [
      "https://wallpaperaccess.com/full/1651757.jpg"
    ],
  };

  return (
    <div>
      <FundRecordDetail record={record} />
    </div>
  );
};

export default FundRecordDetailPage;
