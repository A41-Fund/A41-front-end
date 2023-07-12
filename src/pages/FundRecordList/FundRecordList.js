import FundRecordCard from "../components/fundrecordedcard/FundRecordedCard";
import "./FundRecordList.css"

function FundRecordList() {

  const mockData = [
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 1',
      amount: 1000,
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 1',
      amount: 1000,
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 1',
      amount: 1000,
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 1',
      amount: 1000,
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU',
      username: 'User 1',
      amount: 1000,
    },
    

 
  ];

  return (
    <div>
      <div className="form-container">
        <h1>DONATIONS HISTORY</h1>
      </div>
      <div className="record-container">
        {mockData.map((data, index) => (
          <div className="record">
          <FundRecordCard key={index} {...data} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default FundRecordList;
