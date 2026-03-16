import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [bagsOpen, setBagsOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "#222",
      color: "white"
    }}>

      {/* Brand */}
      <h2 style={{cursor:"pointer"}}>BagVerse 👜</h2>

      {/* Middle Menu */}
      <div style={{display:"flex", alignItems:"center", gap:"30px"}}>

        {/* Bags Dropdown */}
        <div 
          onMouseEnter={() => setBagsOpen(true)}
          onMouseLeave={() => setBagsOpen(false)}
          style={{position:"relative"}}
        >
          <span style={{cursor:"pointer"}}>Bags ▼</span>

          {bagsOpen && (
            <div style={{
              position:"absolute",
              top:"30px",
              background:"white",
              color:"black",
              padding:"10px",
              borderRadius:"5px"
            }}>
              <Link to="/bags/backpacks">Backpacks</Link><br/>
              <Link to="/bags/handbags">Handbags</Link><br/>
              <Link to="/bags/travel">Travel Bags</Link>
            </div>
          )}
        </div>

        {/* Accessories Dropdown */}
        <div 
          onMouseEnter={() => setAccOpen(true)}
          onMouseLeave={() => setAccOpen(false)}
          style={{position:"relative"}}
        >
          <span style={{cursor:"pointer"}}>Accessories ▼</span>

          {accOpen && (
            <div style={{
              position:"absolute",
              top:"30px",
              background:"white",
              color:"black",
              padding:"10px",
              borderRadius:"5px"
            }}>
              <Link to="/accessories/wallets">Wallets</Link><br/>
              <Link to="/accessories/belts">Belts</Link><br/>
              <Link to="/accessories/keychains">Keychains</Link>
            </div>
          )}
        </div>

      </div>

      {/* Right Side */}
      <div style={{display:"flex", alignItems:"center", gap:"25px"}}>

        {/* Search */}
        <div>
          🔍
        </div>

        {/* Account */}
        <Link to="/account" style={{color:"white", textDecoration:"none"}}>
          👤
        </Link>

        {/* Cart */}
        <Link to="/cart" style={{color:"white", textDecoration:"none"}}>
          🛒
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;