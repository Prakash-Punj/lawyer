import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
import { IoNavigate } from "react-icons/io5"
import { NavLink } from "react-router-dom"


export const UpperHeader = () => {
    return(
        <div className="upperheader">
            <div className="container grid grid-two-cols">
                <div className="nav">
                    <div className="nav-icon"><IoNavigate /></div>
                    <p>Chamber no. 31, Bar Council Bhawan,Patna High Court, Patna Bihar - 800001</p>
                </div>

                <div className="upper-nav">
                    <ul className="flex">
                        <li><NavLink to="/">info@advocaterani.com</NavLink></li>
                        <li>+918920207918</li>
                    </ul>

                    <div className="upper-social">
                    <ul className="flex">
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram />

                            </a>
                        </li>
                    </ul>
                    </div>
                </div>

                
                
            </div>
        </div>
    )
}