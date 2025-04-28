export const Wrap_1 = () => {

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
                console.error("Backend error:", result.message);
                alert(result.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Failed to send. Please try again later.");
        }
    };


    return(

        <div className="user-contact">
            <div className="container">
                <div className="verify grid grid-two-cols">
                    <div className="user-form">
                        <h3>Free Consulting</h3>
                        <form action="">
                            <input 
                                type="text"
                                required
                                autoComplete="off"
                                placeholder="Your Name"
                                name="name"
                            />
                            <input 
                                type="email"
                                required
                                autoComplete="off"
                                placeholder="Your Email"
                                name="email"
                            />
                            <input 
                                type="text"
                                required
                                autoComplete="off"
                                placeholder="Subject"
                                name="subject"
                            />
                            <textarea 
                                required
                                autoComplete="off"
                                placeholder="Message"
                                name="message"
                                rows="5" 
                            ></textarea>

                            <button 
                                type="submit"
                                value="send"
                                className="btn"
                            >Make An Appointment</button>
                        </form>
                        <div className="border-style"></div>
                    </div>

                    <div className="description">
                    <h3>
                        We are here to help you anytime. Contact Us
                    </h3>
                    <p>
                        <b>Advocate Shrishti Rani</b> provides expert <b>criminal law</b> services through its digital platform, which serves people seeking legal expertise. <b>Since 2017, Shrishti Rani </b> has provided legal services as a skilled <b>criminal lawyer</b> who has seven year's experience in <b>criminal law.</b>
                    </p>

                    <h4>
                        Advocate Shrishti Rani
                    </h4>
                    <p>Chambers No 31, Lawyer</p>

                    <div className="sign">
                        <img src="./Images/sign.png" alt="lawyer sign" />
                    </div>
                    </div>
                </div>

                <div className="background">
                    <span>C</span>
                </div>
            </div>
        </div>

    )
}