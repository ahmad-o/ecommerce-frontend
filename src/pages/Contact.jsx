import { useState } from "react";
import PageHeader from "../components/PageHeader";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Form Data:", formData);

        alert("Thank you! Your message has been submitted.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div>

            <PageHeader
                title="Contact Us"
                description="We would love to hear from you."
            />


            <section className="contact-page">

                {/* Contact Information */}

                <div className="contact-info">

                    <h2>Get In Touch</h2>

                    <p>
                        If you have any questions about our products or
                        services, feel free to contact us.
                    </p>

                    <div className="contact-item">
                        <h3>Address</h3>
                        <p>123 Business Street, Dhaka, Bangladesh</p>
                    </div>

                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>+880 1XXXXXXXXX</p>
                    </div>

                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>info@example.com</p>
                    </div>

                    <div className="contact-item">
                        <h3>Business Hours</h3>
                        <p>
                            Saturday - Thursday: 9:00 AM - 6:00 PM
                        </p>
                    </div>

                </div>


                {/* Contact Form */}

                <div className="contact-form-container">

                    <h2>Send Us a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="phone">
                                Phone
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

        </div>
    );
}

export default Contact;