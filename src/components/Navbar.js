import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoIosCopy } from "react-icons/fa";
import { IconName } from "react-icons/fa";
import React, { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="sub-nav">
        <div>
          <h1>AAVE</h1>
        </div>

        <Link className="list" to="/">
          Dashboard
        </Link>
        <Link className="list" to="/Assets">
          Assets
        </Link>
        <Link className="list" to="/Stake">
          Stake
        </Link>
        <Link className="list" to="/Governance">
          Governance
        </Link>
        <Link className="list" to="/Markets">
          Markets
        </Link>
      </div>
      <div className="flex-content">
        <div>
          <div
            className="exclamation"
            onMouseOver={() => {
              setOpen(!open);
            }}
          >
            <FaExclamationCircle />
          </div>
          <div className={`dropdown ${open ? "active" : "inactive"}`}>
            <div className="global">
              <h3>Global Settings</h3>
              <FaAngleDown />
            </div>
            <p className="dark">Dark mode</p>
            <p className="dark">Testnet mode</p>
            <div className="small">
              <p>Language</p>
              <div className="small-content">
                <p>english</p>
                <FaAngleDown />
              </div>
            </div>
            <hr></hr>
            <div className="below-content">
              {/* <IoIosCopy /> */}
              <p>Copy address</p>
            </div>
            <div className="below-content">
              {/* <IoIosCopy/> */}
              <p>Copy address</p>
            </div>
          </div>
        </div>
        <div className="sub-content">
          <div className="main-circle">
            <FaCircle />
          </div>
          <p className="wallet">Ethereum Market</p>
          <p className="sub-down">
            <FaAngleDown />
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
