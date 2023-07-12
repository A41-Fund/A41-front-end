import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import FundSpendVotingCard from "../components/spendingpurposetab/SpendingPurposeTab";
import "./SpendRequestList.css"

function SpendRequestList() {

  const mockData = [
    {
      purpose: "Purpose 1 Purose 1 Purpose 1 Purpose 1",
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
      cost: "$2000",
      availableFunds: "$3000",
      deadline: "2023-08-15",
    },
    
    {
      purpose: "Purpose 4",
      cost: "$2000",
      availableFunds: "$3000",
      deadline: "2023-08-15",
    }
    
  ];

  const chunks = mockData.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);
    return acc;
  }, []);

  return (
    <div>
      <div className="title-container">
        <h1>SPENDING REQUEST LIST</h1>
      </div>
      <div className="list-container">
        {mockData.map((data, index) => (
          <FundSpendVotingCard key={index} {...data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default SpendRequestList;
