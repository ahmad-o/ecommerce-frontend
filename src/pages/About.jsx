import PageHeader from "../components/PageHeader";

function About() {
    return (
        <div>

            {/* Page Header */}
            <PageHeader
                title="About Us"
                description="Learn more about our company and what we do."
            />


            {/* Company Introduction */}
            <section className="about-intro">

                <div className="about-image">
                    <img
                        src="/images/about-us.jpg"
                        alt="About our company"
                    />
                </div>

                <div className="about-content">

                    <h2>Who We Are</h2>

                    <p>
                        Welcome to our company. We are dedicated to
                        providing quality products and reliable services
                        to our customers.
                    </p>

                    <p>
                        Our goal is to build long-term relationships with
                        our customers by focusing on quality, trust and
                        excellent service.
                    </p>

                </div>

            </section>


            {/* Mission & Vision */}
            <section className="mission-vision">

                <div>
                    <h2>Our Mission</h2>

                    <p>
                        Our mission is to provide high-quality products
                        while maintaining excellent customer service.
                    </p>
                </div>


                <div>
                    <h2>Our Vision</h2>

                    <p>
                        Our vision is to become a trusted and respected
                        name in our industry.
                    </p>
                </div>

            </section>


            {/* Why Choose Us */}
            <section className="about-why-us">

                <h2>Why Choose Us?</h2>

                <div className="why-us-grid">

                    <div>
                        <h3>Quality Products</h3>
                        <p>
                            We focus on providing reliable and quality
                            products.
                        </p>
                    </div>

                    <div>
                        <h3>Trusted Service</h3>
                        <p>
                            We believe in honest and reliable service.
                        </p>
                    </div>

                    <div>
                        <h3>Customer Satisfaction</h3>
                        <p>
                            Our customers are at the center of everything
                            we do.
                        </p>
                    </div>

                </div>

            </section>


            {/* Call To Action */}
            <section className="about-cta">

                <h2>Want to Know More?</h2>

                <p>
                    Feel free to contact us if you have any questions.
                </p>

            </section>

        </div>
    );
}

export default About;