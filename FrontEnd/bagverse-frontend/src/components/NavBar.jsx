import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [bagsOpen, setBagsOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        padding: "0 40px",
        background: "#EED9B9",
        fontFamily: "'Playfair Display', serif",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* LEFT - LOGO */}
      {/* LEFT - LOGO */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={logo}
          alt="BagVerse Logo"
          style={{
            height: "100%",
            maxHeight: "200px", // safety cap
            objectFit: "contain",
          }}
        />
      </Link>

      {/* CENTER MENU */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          fontSize: "18px",
          color: "#3a3a2a",
        }}
      >
        {/* Bags */}
        <div
          onMouseEnter={() => setBagsOpen(true)}
          onMouseLeave={() => setBagsOpen(false)}
          style={{
            position: "relative",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Bags <ChevronDown size={16} />
          {bagsOpen && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                left: "0",
                background: "white",
                background: "#FFF8F0",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                minWidth: "180px",
                display: "flex",
                flexDirection: "column",
                padding: "8px 0",
                overflow: "hidden",
              }}
            >
              <Link to="/bags/backpacks">Backpacks</Link>
              <br />
              <Link to="/bags/handbags">Handbags</Link>
              <br />
              <Link to="/bags/travel">Travel Bags</Link>
            </div>
          )}
        </div>

        {/* Accessories */}
        <div
          onMouseEnter={() => setAccOpen(true)}
          onMouseLeave={() => setAccOpen(false)}
          style={{
            position: "relative",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Accessories <ChevronDown size={16} />
          {accOpen && (
            <div
              style={{
                position: "absolute",
                top: "35px",
                background: "white",
                padding: "12px",
                borderRadius: "6px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                minWidth: "150px",
              }}
            >
              <Link to="/accessories/wallets">Wallets</Link>
              <br />
              <Link to="/accessories/belts">Belts</Link>
              <br />
              <Link to="/accessories/keychains">Keychains</Link>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          color: "#3a3a2a",
        }}
      >
        <Search size={22} strokeWidth={1.5} style={{ cursor: "pointer" }} />

        <Link to="/account" style={{ color: "#3a3a2a" }}>
          <User size={22} strokeWidth={1.5} />
        </Link>

        <Link to="/cart" style={{ color: "#3a3a2a" }}>
          <ShoppingBag size={22} strokeWidth={1.5} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
