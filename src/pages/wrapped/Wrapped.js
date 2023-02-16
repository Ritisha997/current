import React from "react";
import Navbar from "../../components/Navbar";
import "./wrapped.scss";
import { FaCheckCircle } from "react-icons/fa";

const Wrapped = () => {
  return (
    <section className="wrapped-section">
      <Navbar />
      <div className="flex-container">
        <div className="reserve">
          <h3>Reserve status & configuration</h3>
          <div className="borrow">
            <strong>Borrow info</strong>
            <div></div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
              <p>$1.39M of $4.95M</p>
            </div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
              <p>$1.39M of $4.95M</p>
            </div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
              <p>$1.39M of $4.95M</p>
            </div>
          </div>
          <div className="collector">
          <strong>Collector info</strong>

          <div className="factor">
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
            </div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
            </div>
          </div>
          </div>
          <div className="borrow">
            <strong>Borrow info</strong>
            <div></div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
              <p>$1.39M of $4.95M</p>
            </div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
              <p>$1.39M of $4.95M</p>
            </div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
              <p>$1.39M of $4.95M</p>
            </div>
          </div>
          <div className="collector">
          <strong>Collector info</strong>

          <div className="factor">
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
            </div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
            </div>
          </div>
          </div>
          <div className="e-mode">
            <strong>Collector info</strong>
            <strong>Collector info</strong>
            <strong>Collector info</strong>
          </div>
          <div className="collector">
          <div className="factor">
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
            </div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
            </div>
          <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <strong className="middle-para">879.03 of 3,000.00</strong>
            </div>
            </div>
          <div className="e-modePara">
            <strong>
              E-Mode increases your LTV for a selected category of assets,
              meaning that when E-mode is enabled, you will have higher
              borrowing power over assets of the same E-mode category which are
              defined by Aave Governance. You can enter E-Mode from your
              Dashboard. To learn more about E-Mode and applied restrictions in
              FAQ or Aave V3 Technical Paper.
            </strong>
          </div>
          </div>
          <div className="borrow">
            <strong>Borrow info</strong>

            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
              <p className="middle-para">879.03 of 3,000.00</p>
            </div>
            <div></div>
            <div className="info-first">
              <p>
                total supplied <span> <FaCheckCircle/></span>
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="wallet-balance">
          <h3>Your info</h3>
          <div className="wallet-flex">
            <div></div>
            <div>
              <p>wallet balance</p>
              <p>0 wstETH</p>
            </div>
          </div>
          <div className="dollar">
            <p>
              Available to supply <span> <FaCheckCircle/></span>
            </p>
            <p>0 wstEth</p>
            <div className="wallet-supply">
              <p>$0</p>
              <button>Supply</button>
            </div>
          </div>
          <p className="empty">Your Ethereum wallet is empty. Purchase or transfer assets.</p>
        </div>
      </div>
     
    </section>
  );
};

export default Wrapped;
