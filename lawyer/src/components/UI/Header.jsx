import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import logo from '/Images/logo.png';
import { FaSearchengin } from "react-icons/fa6";

export const Header = () => {

    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("")

    const handleButtonToggle = () => {
        return setShow(!show);
    };

    const handleSearchToggle = () => {
        return setShowSearch(!showSearch);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); 
        if (searchValue.trim() === "") return;
        
        console.log("Searching for:", searchValue);
        alert(`Searching for: ${searchValue}`);
    
        setSearchValue("");
        setShowSearch(false);
    };
    

    return ( 
    <header>
        <div className="container">
            <div className="grid navbar-grid grid-three-cols">
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} alt="Lawyer Logo" style={{ height: '6rem' }} />
                    </NavLink>
                </div>

                <nav className={show ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <NavLink to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/user-contact">
                                User
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="ham-menu">
                    <button onClick={handleButtonToggle}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className="search">
                    <button onClick={handleSearchToggle}>
                        <FaSearchengin />
                    </button>

                    {showSearch && (
    <div className="search-popup">
        <form onSubmit={handleSearchSubmit}>
            <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    </div>
)}

                </div>

            </div>
        </div>
    </header>
    )
}