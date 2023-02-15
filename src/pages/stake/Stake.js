import React from "react";
import Navbar from "../../components/Navbar";
import "./stake.scss";
import { FaCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const stake = () => {
  return (
    <section className="stake-section">
      <Navbar />
      <div className="stake-content">
        <h1>Staking</h1>
        <p className="distance">
          <span>Available on</span> Ethereum Mainnet
        </p>
        <p>
          AAVE holders (Ethereum network only) can stake their AAVE in the
          Safety Module to add more security to the protocol and earn Safety
          Incentives. In the case of a shortfall event, up to 30% of your stake
          can be slashed to cover the deficit, providing an additional layer of
          protection for the protocol.Learn more about the risks involoved.
        </p>
        <div className="stake-rate">
          <p>
            Funds in the Safety Module <span>$376.79M</span>
          </p>
          <p>
            Total emission per day <span>1,100.00AAVE</span>
          </p>
        </div>
      </div>
      <div className="stake">
        <div className="stake-block">
          <h1>Stake AAVE</h1>
          <table>
            <thead>
              <tr>
                <th className="ether">
                  {/* <p>
                  <FaCircle />
                </p> */}
                 <div className="sub-ether">
                    <p><FaCircle/></p>
                    <h4>AAVE</h4>
                  </div>
                </th>
                <th className="ether">
                  <h4>Staking APR</h4>
                </th>
                <th className="ether">
                  <h4>Max Slashing</h4>
                </th>
                <th className="ether">
                  <h4>Wallet Balance</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="stake-percent">
                <td></td>
                <td>6.12%</td>
                <td>30.00%</td>
                <td>0</td>
                <td>
                  <button>Stake</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="stake-block_big">
            <div className="stake-block_small">
              <h3>Staked AAVE</h3>
              <p>0</p>
              <p className="stake-p">$0</p>
              <button>Cooldown to unstake</button>
              <div className="stake-block_period">
                <p>
                  Cooldown period<span><FaInfoCircle/></span>
                </p>
                <p>10d</p>
              </div>
            </div>
            <div className="stake-block_small">
              <h3>Staked AAVE</h3>
              <p>0</p>
              <p className="stake-p">$0</p>
              <button>Cooldown to unstake</button>
              <div className="stake-block_period">
                <p>
                  Cooldown period<span><FaInfoCircle/></span>
                </p>
                <p>10d</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stake-block">
          <h1>Stake AAVE</h1>
          <table>
            <thead >
              <tr>
                <th className="ether">
                  {/* <p>
                  <FaCircle />
                </p> */}
                  <div className="sub-ether">
                    <p><FaCircle/></p>
                    <h4>AAVE</h4>
                  </div>
                </th>
                <th className="ether">
                  <h4>Staking APR</h4>
                </th>
                <th className="ether">
                  <h4>Max Slashing</h4>
                </th>
                <th className="ether">
                  <h4>Wallet Balance</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="stake-percent">
                <td></td>
                <td>6.12%</td>
                <td>30.00%</td>
                <td>0</td>
                <td>
                  <button>Stake</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="stake-block_big">
            <div className="stake-block_small">
              <h3>Staked AAVE</h3>
              <p>0</p>
              <p className="stake-p">$0</p>
              <button>Cooldown to unstake</button>
              <div className="stake-block_period">
                <p>
                  Cooldown period<span><FaInfoCircle/></span>
                </p>
                <p>10d</p>
              </div>
            </div>
            <div className="stake-block_small">
              <h3>Staked AAVE</h3>
              <p>0</p>
              <p className="stake-p">$0</p>
              <button>Cooldown to unstake</button>
              <div className="stake-block_period">
                <p>
                  Cooldown period<span><FaInfoCircle/></span>
                </p>
                <p>10d</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default stake;
