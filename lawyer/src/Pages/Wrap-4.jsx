

export const Wrap_4 = () => {
    return (
         <div className="client-views">
             <div className="container">
                 <div className="client-views-content-background"></div>
                 <div className="client-views-content grid grid-two-cols">
                     <div className="left">
                         <h2>What our clients say about us</h2>
                         <p>
                             We’ve helped thousands of clients in complex legal matters. Here’s what a few of them had to say about their experience working with us.
                         </p>
                     </div>

                    <div className="right">
                        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                             <div className="carousel-inner">
                                 <div className="carousel-item active">
                                     <div className="carousel-caption my-caption">
                                         <p>
                                             The team provided exceptional support during my case. Professional and compassionate every step of the way.
                                         </p>
                                         <div className="right-bottom grid grid-two-cols">
                                             <img src="/Images/advocate_with_mustache.png" alt="Robert William" />
                                             <div className="right-name">
                                                 <h4>Robert William</h4>
                                                 <p>CEO & Founder</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="carousel-item">
                                     <div className="carousel-caption my-caption">
                                         <p>
                                             I highly recommend them. They made the legal process feel simple and kept me updated the entire time.
                                         </p>
                                         <div className="right-bottom grid grid-two-cols">
                                             <img src="/Images/young_advocate.png" alt="Ken Williamson" />
                                             <div className="right-name">
                                                 <h4>Ken Williamson</h4>
                                                 <p>CEO & Founder</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="carousel-item">
                                     <div className="carousel-caption my-caption">
                                         <p>
                                             Their knowledge and dedication helped me get through a difficult legal challenge. Truly grateful!
                                         </p>
                                         <div className="right-bottom grid grid-two-cols">
                                             <img src="/Images/random_female_advocate.png" alt="Jennifer Lopez" />
                                             <div className="right-name">
                                                 <h4>Jennifer Lopez</h4>
                                                 <p>CEO & Founder</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>                         </div>
                         <div className="carousel-indicators">
                            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>                             <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
                             <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
                         </div>

                     </div>
                 </div>
             </div>
         </div>
     );
 };



