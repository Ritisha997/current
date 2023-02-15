import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import SharedLayout from "./SharedLayout";


const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <Navbar/>
      {/* <SharedLayout/> */}
      <div className="heading">
        <div className="circle"><FaCircle/></div>
        <h1 className="sub-heading">Ethereum Market</h1>
        <p className="down"><FaAngleDown/></p>
      </div>
      <div>later on</div>
      <div className="blocks">
        <div className="block">
          <div className="content">
            <h2 className="content-1">Your Supplies</h2>
            <p className="para"><FaAngleDown/></p>
          </div>
          <p className="text">Nothing supplied yet</p>
        </div>
        <div className="block">
          <div className="content">
            <h2 className="content-1">Your Supplies</h2>
            <p><FaAngleDown/></p>
          </div>
          <p className="text">Nothing supplied yet</p>
        </div>
      </div>
      <div className="about-main">
        <h3>What is Aave?</h3>
        <p className="overview">Aave is a decentralized non-custodial liquidity market protocol where users can participate as suppliers or borrowers.
            Suppliers provide liquidity to the amrket to earn a passive income, while borrowers are able to borrow in an overcollateralised 
            (perpetually) or undercollateralised(one-block liquidity) fashion. 
        </p>
      </div>
      <div className="interaction">
        <h3>Interaction with Aave protocol</h3>
        </div>
        <div className="features">
          
            <div className="feature">
              <div className="icon">
                <FaHandHoldingUsd/>
                </div>
                <div className="component">
                    <h4>Supply</h4>
                    <p>in order to interact with aave protocol you simply supply your preferred asset and amount</p>
                </div>
            </div>
            
            <div className="feature">
                <div className="icon">
                <FaHandHoldingUsd/>
                </div>
                <div className="component">
                    <h4>Supply</h4>
                    <p>in order to interact with aave protocol you simply supply your preferred asset and amount</p>
                </div>
            </div>
            <div className="feature">
                <div className="icon">
                <FaHandHoldingUsd/>
                </div>
                <div className="component">
                    <h4>Supply</h4>
                    <p>in order to interact with aave protocol you simply supply your preferred asset and amount</p>
                </div>
            </div>
            <div className="feature">
                <div className="icon">
                <FaHandHoldingUsd/>
                </div>
                <div className="component">
                    <h4>Supply</h4>
                    <p>in order to interact with aave protocol you simply supply your preferred asset and amount</p>
                </div>
            </div>
        </div>
     


        <table>
      <thead>
        <tr>
          <th>Assets</th>
          <th>Assets</th>
          <th>Assets</th>
          <th>Assets</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>L</p>
            <p>ETH</p>
          </td>
          <td>0</td>
          <td>2.20%</td>
          <p>L</p>
          <td><button>Supply</button></td>
          <td><button>Details</button></td>
        </tr>
      </tbody>
    </table>
    </section>
  );
};

export default Dashboard;
