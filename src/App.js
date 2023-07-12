import './App.css';
import SpendRequestList from './pages/SpendRequestList/SpendRequestList'
import VotingCardSection from './pages/components/spendingpurposesection/SpendingPurposeSection'
import FundRecordList from './pages/FundRecordList/FundRecordList'
import FundRecordSection from './fundrecordsection/FundRecordSection'
import Dashboard from './pages/Dashboard'
import FundRecordForm from './pages/FundRecored/FundRecorded'
import SpendingRequestForm from './pages/SpendingRequest/SpendingRequest'
import Footer from "./pages/components/footer/Footer";
import Navbar from "./pages/components/navbar/Navbar";


function App() {
  return (
    <>
        <div className="app">
          <Navbar />
          <SpendingRequestForm />
          <Footer />
        </div>
        </>
      );
    };
export default App;