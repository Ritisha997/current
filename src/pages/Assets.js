import React from "react";
import Navbar from "../components/Navbar";
import SharedLayout from "./SharedLayout";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Assets = () => {
  return (
    <section className="main-container">
      <Navbar />
      {/* <SharedLayout/> */}
      <div className="container">
        <div className="single-container">
          <div className="sub-main">
            <h2>Assets to supply</h2>
            <p>
              <span className="sub-circle"> <FaInfoCircle /></span>Your Ethereum wallet is empty. Purchase or transfer
              assets.
            </p>
          </div>
          <table className="main">
            <thead className="title">
              <tr className="sub-title">
                <th>
                  <h4 className="sub-title">Assets</h4>
                </th>
                <th>
                  <h4 className="sub-title">Wallet Balance</h4>
                </th>
                <th>
                  <h4 className="sub-title">APY</h4>
                </th>

                <th>
                  <div className="collateral">
                    <h4>Can be collateral</h4>
                    <div className="angle">
                      <p>
                        <FaAngleUp />
                      </p>
                      <p>
                        <FaAngleDown />
                      </p>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="data">
                  <p><FaCircle/></p>
                  <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <p><FaCircle/></p>
                  <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <p><FaCircle/></p>
                  <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <p><FaCircle/></p>
                  <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <p><FaCircle/></p>
                  <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <p><FaCircle/></p>
                  <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                  <p>ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="single-container">
          <div className="sub-main">
            <h2>Assets to supply</h2>
            <p>
              <span className="sub-circle"><FaInfoCircle /></span>Your Ethereum wallet is empty. Purchase or transfer
              assets.
            </p>
          </div>
          <table className="main">
            <thead className="title">
              <tr className="sub-title">
                <th>
                  <h4 className="sub-title">Assets</h4>
                </th>
                <th>
                <div className="collateral">
                    <h4>Available</h4>
                    <div className="angle">
                      <p>
                        <FaAngleUp />
                      </p>
                      <p>
                        <FaAngleDown />
                      </p>
                    </div>
                    <p className="sub-circle">
                      {" "}
                      <FaInfoCircle />
                    </p>
                  </div>
                </th>
                <th>
                  <div className="collateral">
                    <h4>APY, variable</h4>
                    <div className="angle">
                      <p>
                        <FaAngleUp />
                      </p>
                      <p>
                        <FaAngleDown />
                      </p>
                    </div>
                    <p className="sub-circle">
                      {" "}
                      <FaInfoCircle />
                    </p>
                  </div>
                </th>

                <th>
                  <div className="collateral">
                    <h4>APY, stable</h4>
                    <p className="sub-circle">
                      {" "}
                      <FaInfoCircle />
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            {/* <thead className="title">
              <tr className="sub-title">
                <th>
                  <h4 className="sub-title">Assets</h4>
                </th>
                <th className="collateral">
                  <h4>Available</h4>
                  <FaInfoCircle/>
                  <div className="angle">
                    <p>
                      <FaAngleUp />
                    </p>
                    <p>
                      <FaAngleDown />
                    </p>
                  </div>
                </th>
                <th className="collateral">
                  <h4>Available</h4>
                  <FaInfoCircle/>
                  <div className="angle">
                    <p>
                      <FaAngleUp />
                    </p>
                    <p>
                      <FaAngleDown />
                    </p>
                  </div>
                </th>
                <th className="collateral">
                  <h4>Can be collateral</h4>
                  <FaInfoCircle/>
                </th>
               
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                  <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
              <tr>
                <td className="data">
                <p><FaCircle/></p>
                <p className="eth">ETH</p>
                </td>
                <td className="sub-data">0</td>
                <td className="sub-data">2.20%</td>
                <p className="sub-data">L</p>
                <td className="sub-data">
                  <button>Supply</button>
                </td>
                <td className="sub-data">
                  <button>Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Assets;
