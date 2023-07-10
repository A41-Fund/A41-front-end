import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FundRecordSection from "../fundrecordsection/FundRecordSection";
import VotingCardSection from "./components/spendingpurposesection/SpendingPurposeSection";
import TotalFund from "./components/totalfund/TotalFund";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="funddislay">
        <TotalFund />
      </div>
      <VotingCardSection />
      <FundRecordSection />
      <Footer />
    </div>
  );
}
export default Dashboard;
