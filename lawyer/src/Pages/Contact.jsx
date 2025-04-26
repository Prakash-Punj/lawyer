
export const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = new FormData(e.target); 
        const formInputData = Object.fromEntries(formData.entries());

        
        console.log("Form data being sent:", formInputData);

        try {
            const res = await fetch("https://probable-brain-production.up.railway.app/api/contact", {
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
                e.target.reset(); 
            } else {
                
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
                                    <select name="subject" required defaultValue="">
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


