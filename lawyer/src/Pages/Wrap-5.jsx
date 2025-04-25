
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaPlus, FaTwitter } from "react-icons/fa6"
import React, {useState} from 'react';

export const Wrap_5 = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleSocial = () => {
            setIsActive(!isActive);
    }

    return(
        <div className="biodata">
            <div className="container">
                <div className="biodata-content grid grid-two-cols">
                    <div className="left">
                        <h2>Meet Our Most Talented & Qualified Attorneys</h2>
                    </div>
                    <div className="right">
                        <p>Our team of skilled and experienced attorneys is dedicated to providing top-notch legal services. With expertise in various legal fields, they are committed to delivering the best solutions for your needs. Trust our professionals to guide you with knowledge, integrity, and excellence.</p>
                    </div>
                </div>

                <div className="advocate_image">
                <div className="biodata-img grid grid-four-cols">
                    <img src="./Images/biodata.png" alt="biodata" />
                    <div className={`biodata-social ${isActive ? 'active' : ''}`}>
                        <ul>
                            <li className="switch" onClick={toggleSocial}>
                            <FaPlus />
                            </li>
                            <li className="on">
                                <a href="#" target="_blank"><FaFacebookF /></a>
                            </li>
                            <li className="on">
                                <a href="#" target="_blank"><FaTwitter /></a>
                            </li>
                            <li className="on">
                                <a href="#" target="_blank"><FaLinkedinIn /></a>
                            </li>
                            <li className="on">
                                <a href="#" target="_blank"><FaPinterestP /></a>

                            </li>
                        </ul>
                    </div>
                </div>

                <div className="advocate_name">
                    <h4>Advocate Rani</h4>
                    <p>
                        Criminal Lawyer
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}