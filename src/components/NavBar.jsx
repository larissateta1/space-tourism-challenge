import logo from "../assets/shared/logo2.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar=({activeLink})=>{
    const location = useLocation();
    const isLinkActive = (path) => {
        if(location.pathname === path){
            console.log(path);
        }

    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
        <div className="nav">
            {/* <div>
                <img src={logo} alt="logo" />
            </div> */}
            <div>
                <div className={`navbar ${isMenuOpen ? '' : 'active'}`}>
                    <div className="mobile">
                    {isMenuOpen ? (
                    <CloseIcon style={{ fontSize: 24 }} className="icon" onClick={toggleMenu} />
                    ) : (
                    <MenuIcon style={{ fontSize: 24 }} className="icon" onClick={toggleMenu} />
                    )}
                    </div>
                    <ul>
                        <li className={` ${activeLink === "Home" ? "acti" : ""}`}>
                            <Link to={"/"}  className={`links`}>
                                00 Home
                            </Link>    
                        </li>
                        <li>
                            <Link to={"/destinations"} className={`links ${activeLink === "Destination" ? "acti" : ""} ? 'acti' : ''}`}>
                                01 Destination
                            </Link>
                        </li>
                        <li>
                            02 Crew
                        </li>
                        <li>
                            <Link to={"/technology"}  className={`links ${activeLink === "Technology" ? "acti" : ""} : ''}`}>
                                03 Technology
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
export default NavBar;