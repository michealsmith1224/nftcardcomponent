import "./App.css";
import { useState } from "react";
import nftimage from "./images/image-equilibrium.jpg";
import nftimageprofile from "./images/image-avatar.png";
import iconEth from "./images/icon-ethereum.svg";
import iconClock from "./images/icon-clock.svg";
import iconview from "./images/icon-view.svg";

function App() {
  const [show, setShow] = useState(false);
  const nftDetails = [
    {
      name: "Jules Wyvern",
      nftName: "Equilibrium #3429",
      ntftext: "Our Equilibrium collection promotes balance and calm.",
      nftprice: "0.041 ETH",
      nftduration: "3 days left",
      nftimage: nftimage,
      nftProfile: nftimageprofile,
      iconclock: iconClock,
      iconEth: iconEth,
      iconview: iconview,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        {nftDetails.map((item, id) => (
          <div className="card">
            <div className="img-container">
              {show && (
                <div className="img-overlay">
                  <img
                    onClick={() => setShow(false)}
                    src={item.iconview}
                    alt=""
                  />
                </div>
              )}

              <img
                onClick={() => {
                  setShow(true);
                }}
                src={item.nftimage}
                alt="nft "
              />
            </div>
            <div className="nft-content">
              <h3>{item.nftName}</h3>
              <p className="nfttext">{item.ntftext}</p>
              <div className="price-dur">
                <p>
                  <span>
                    <img src={item.iconEth} alt="" />
                  </span>
                  <small>{item.nftprice}</small>
                </p>
                <p>
                  <span>
                    <img src={item.iconclock} alt="" />
                  </span>
                  <small>{item.nftduration}</small>
                </p>
              </div>
              <div className="profile">
                <p>
                  <span>
                    <img src={item.nftProfile} alt="nft" />
                  </span>
                  <small>
                    <span>Creator of </span>
                    {item.name}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
