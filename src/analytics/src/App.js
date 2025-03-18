import './App.css';
import Footer from './layouts/Footer';
import Banner from './layouts/Banner';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import { w3_close } from './utils/w3_close';
import GeneralStats from './layouts/sections/GeneralStats';
import Countries from './layouts/sections/Countries';
import RecentUsers from './layouts/sections/RecentUsers';
import RecentComments from './layouts/sections/RecentComments';
import Regions from './layouts/sections/Regions';
import Feeds from './layouts/sections/Feeds';
import InfoBoard from './layouts/sections/InfoBoard';
import Dashboard from './layouts/sections/Dashboard';

function App() {
  return (
    <>

    {/* Top container */}
    <Header />
    {/* Sidebar/menu */}
    <SideBar name="Mike"/>

    {/* Overlay effect when opening sidebar on small screens */}
    <div
      className="w3-overlay w3-hide-large w3-animate-opacity"
      onClick={()=>{w3_close()}}
      style={{ cursor: "pointer" }}
      title="close side menu"
      id="myOverlay"
    />
    {/* !PAGE CONTENT! */}
    <div className="w3-main" style={{ marginLeft: 300, marginTop: 43 }}>
      {/* Header */}
      <Banner heading={"My Dashboard"}/>

      <Dashboard />
     

      <div className="w3-panel">
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <Regions />
          <Feeds />


        </div>
      </div>
      <hr />
      <GeneralStats />

      <hr />
      <Countries />

      <hr />

      <RecentUsers />

      <hr />
      <RecentComments />

      <br />
      <InfoBoard />

      {/* Footer */}
      <Footer />

      {/* End page content */}
    </div>
  </>
  
  );
}

export default App;
