import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FundRecordSection from "../fundrecordsection/FundRecordSection";
import VotingCardSection from "./components/spendingpurposesection/SpendingPurposeSection";
import TotalFund from "./components/totalfund/TotalFund";

function Dashboard() {
  return (
    <div className="dashboard" style={{paddingBottom: "80px"}}>
      <div className="funddislay">
        <TotalFund />
      </div>
      <VotingCardSection />
      <FundRecordSection />
    </div>
  );
}
export default Dashboard;
