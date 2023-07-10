import React from 'react';
import FundRecordCard from '../pages/components/fundrecordedcard/FundRecordedCard';
import "./FundRecordSection.css"

const FundRecordSection = () => {
  const mockData = [
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 1',
      amount: 1000,
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 2',
      amount: 2000,
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 3',
      amount: 1500,
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
        username: 'User 3',
        amount: 1500,
      },
      {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
        username: 'User 3',
        amount: 1500,
      }
 
  ];

  const maxCardsToShow = 4;
  const visibleCards = mockData.slice(0, maxCardsToShow);

  return (
    <section className="fund-record-section">
        <h1>TUYEN DUONG NAP LAN DAU</h1>
      <div className="fund-record-container">
        {visibleCards.map((data, index) => (
          <FundRecordCard key={index} {...data} />
        ))}
      </div>
      {mockData.length > maxCardsToShow && (
        <div className="view-more-button-container">
          <button className="view-more-button">View More</button>
        </div>
      )}
    </section>
  );
};

export default FundRecordSection;
