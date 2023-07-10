import React from 'react';
import SpendingDetail from './components/spendingdetail/SpendingDetail';

const SpendingDetailPage = () => {
  // Assuming you have the necessary data
  const record = {
    purpose: 'Fund for a charity event',
    cost: '$1000',
    availableFunds: '$5000',
    deadline: '2023-07-31',
    yesVotes: 20,
    noVotes: 5,
  };

  return (
    <div>
      <SpendingDetail
        purpose={record.purpose}
        cost={record.cost}
        availableFunds={record.availableFunds}
        deadline={record.deadline}
        yesVotes={record.yesVotes}
        noVotes={record.noVotes}
      />
    </div>
  );
};

export default SpendingDetailPage;
