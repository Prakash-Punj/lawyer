// export const Contact = () => {

//     const handleFormSubmit = (formData) => {
//         const formInputData = Object.fromEntries(formData.entries());
//         console.log(formInputData);
//     };

//     return(
//         <section className="section-contact">
//             <div className="container">
//                 <div className="lawyer-contact">
//                     <div className="contact-grid grid grid-two-cols">
//                     <div className="law-img">
//                         <img src="./Images/lawyer_on_blazer.png" alt="lawyer on blazer" />
//                     </div>

//                     <div className="contact-form">
//                         <h2 className="container-title">Need Consultancy, Request A Free Quote</h2>
//                         <p>
//                             Looking for expert legal advice? Advocate Rani offers professional consultancy on a wide range of legal matters
//                         </p>

//                         <div className="contact-wrapper container">
//                             <form action={handleFormSubmit}>
//                                 <input 
//                                     type="text"
//                                     required
//                                     className="form-control"
//                                     autoComplete="off"
//                                     placeholder="Your Name"
//                                     name="username" 
//                                 />
//                                 <input 
//                                     type="email"
//                                     required
//                                     className="form-control"
//                                     autoComplete="off"
//                                     placeholder="Your Email"
//                                     name="email" 
//                                 />
//                                 <input 
//                                     type="number"
//                                     required
//                                     className="form-control"
//                                     autoComplete="off"
//                                     placeholder="Your Phone"
//                                     name="phone" 
//                                 />
//                                 <select>
//                                     <option value="" disabled selected>Subject</option>
//                                     <option value="family_law">Family Law</option>
//                                     <option value="business_law">Business Law</option>
//                                     <option value="educational_law">Educational Law</option>
//                                     <option value="criminal_law">Criminal Law</option>
//                                 </select>
//                                 <textarea 
//                                     required
//                                     className="form-control"
//                                     autoComplete="off"
//                                     placeholder="Enter your message"
//                                     name="message"
//                                     rows="10" 
//                                 ></textarea>

//                             <button 
//                                 type="submit"
//                                 value="send"
//                                 className="btn"
//                             >Make An Appointment</button>

//                         </form>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


export const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        const formData = new FormData(e.target); // form element data
        const formInputData = Object.fromEntries(formData.entries());

        // You can log or validate before sending
        console.log("Form data being sent:", formInputData);

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formInputData),
            });

            const result = await res.json();
            if (res.status === 200) {
                console.log(result.message);
                alert("Message sent successfully!");
                e.target.reset(); // reset form
            } else {
                // If it's not a success status, show the message from the backend
                console.error("Error from backend:", result.message || result.error);
                alert(result.message || "Something went wrong. Please try again.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Try again.");
        }
    };

    return (
        <section className="section-contact">
            <div className="container">
                <div className="lawyer-contact">
                    <div className="contact-grid grid grid-two-cols">
                        <div className="law-img">
                            <img src="./Images/lawyer_on_blazer.png" alt="lawyer on blazer" />
                        </div>

                        <div className="contact-form">
                            <h2 className="container-title">Need Consultancy, Request A Free Quote</h2>
                            <p>
                                Looking for expert legal advice? Advocate Rani offers professional consultancy on a wide range of legal matters
                            </p>

                            <div className="contact-wrapper container">
                                <form onSubmit={handleSubmit}>
                                    <input 
                                        type="text"
                                        required
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Your Name"
                                        name="name" 
                                    />
                                    <input 
                                        type="email"
                                        required
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Your Email"
                                        name="email" 
                                    />
                                    <input 
                                        type="number"
                                        required
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Your Phone"
                                        name="phone" 
                                    />
                                    <select name="subject" required>
                                        <option value="" disabled selected>Subject</option>
                                        <option value="family_law">Family Law</option>
                                        <option value="business_law">Business Law</option>
                                        <option value="educational_law">Educational Law</option>
                                        <option value="criminal_law">Criminal Law</option>
                                    </select>
                                    <textarea 
                                        required
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Enter your message"
                                        name="message"
                                        rows="10" 
                                    ></textarea>

                                    <button 
                                        type="submit"
                                        className="btn"
                                    >Make An Appointment</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


