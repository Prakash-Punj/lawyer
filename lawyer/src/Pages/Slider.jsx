import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { LuNotebook } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";


export const Slider = () => {
  return (
    <div className="slide-section">
    
      <div id="customCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
      
      <div className="carousel-indicators d-md-none">
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="0" className="active" />
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="1" />
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="2" />
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="3" />
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/Images/slider_1.png" className="d-block w-100" alt="Advocate talking pic" />

        <div className="carousel-caption my-caption">
            <h2>Advocate Shrishti Rani is a best lawyer in Patna civil court</h2>
            <p>
                Her services are criminal lawyer, civil lawyer, divorce lawyer, family lawer, and defense lawyer.
            </p>
            <button className="slide-1-btn btn">Free Consultation</button>
        </div>
          
        </div>
        <div className="carousel-item">
          <img src="/Images/slider_2.png" className="d-block w-100" alt="Advocate talking pic" />

          <div className="carousel-caption my-caption">
            <h2>Trusted criminal lawyer since 2013</h2>
            <p>
                Advocate Shrishti Rani brings years of courtroom experience, providing strong and strategic defense in criminal cases across Bihar and beyond. 12 years of Expertise in Criminal Law.
            </p>
            <button className="slide-1-btn btn">book a consultation</button>
         </div>

        </div>
        <div className="carousel-item">
          <img src="/Images/slider_1.png" className="d-block w-100" alt="Advocate talking pic" />

          <div className="carousel-caption my-caption">
            <h2>personalized legal support you can rely on</h2>
            <p>
                From domestic violence to cybercrime, get dedicated legal guidance and tailored protection for your case -- online or in person.
            </p>
            <button className="slide-1-btn btn">explore our services</button>
         </div>

        </div>
        <div className="carousel-item">
          <img src="/Images/slider_2.png" className="d-block w-100" alt="Advocate talking pic" />

          <div className="carousel-caption my-caption">
            <h2>personalized legal support you can rely on</h2>
            <p>
                From domestic violence to cybercrime, get dedicated legal guidance and tailored protection for your case -- online or in person.
            </p>
            <button className="slide-1-btn btn">explore our services</button>
         </div>

        </div>
      </div>

      <button className="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
        <span className="icon-left" aria-hidden="true"><FaArrowLeft />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next d-none d-md-block" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
        <span className="icon-right" aria-hidden="true"><FaArrowRight />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>

      <div className="element-section">
          <div className="container">
            <div className="element-container element-grid grid grid-three-cols">
              <div className="element-box">
                <div className="element-icon">
                  <SlBadge />
                </div>
                <div className="element-content">
                  <h3>Winning Guarantee</h3>
                  <p>
                    Our history of cases is 99% winning success.
                  </p>
                </div>
              </div>
              <div className="element-box">
                <div className="element-icon">
                  <LuNotebook />
                </div>
                <div className="element-content">
                  <h3>Secure Management</h3>
                  <p>
                    The security system of Shrishti Rani is so great & wonderful.
                  </p>
                </div>
              </div>
              <div className="element-box">
                <div className="element-icon">
                  <FcCustomerSupport />
                </div>
                <div className="element-content">
                  <h3>Full time support</h3>
                  <p>
                    We are here for your help from 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    
    </div>
  );
};


