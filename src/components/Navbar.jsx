import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            <div className="navbar-container">

                {/* Logo */}
                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    MyShop
                </Link>


                {/* Mobile Menu Button */}
                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>


                {/* Navigation Links */}
                <div
                    className={`nav-links ${
                        menuOpen ? "nav-links-open" : ""
                    }`}
                >
                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>

                    <Link to="/about" onClick={closeMenu}>
                        About Us
                    </Link>

                    <Link to="/products" onClick={closeMenu}>
                        Products
                    </Link>

                    <Link to="/gallery" onClick={closeMenu}>
                        Gallery
                    </Link>

                    <Link to="/contact" onClick={closeMenu}>
                        Contact Us
                    </Link>

                    <Link to="/policy" onClick={closeMenu}>
                        Policy
                    </Link>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;