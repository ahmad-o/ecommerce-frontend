import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

function Home() {
    const featuredProducts = products.slice(0, 3);

    return (
        <div>

            {/* Hero */}
            <Hero />


            {/* Introduction */}
            <section className="intro-section">

                <SectionTitle
                    title="About Our Business"
                    subtitle="We provide quality products and reliable service."
                />

                <p>
                    Welcome to our website. We are committed to providing
                    quality products and excellent customer service.
                </p>

            </section>


            {/* Featured Products */}
            <section className="products-section">

                <SectionTitle
                    title="Featured Products"
                    subtitle="Explore some of our popular products."
                />

                <div className="product-grid">

                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </section>


            {/* Why Choose Us */}
            <section className="why-us">

                <SectionTitle
                    title="Why Choose Us?"
                    subtitle="We focus on quality and customer satisfaction."
                />

                <div className="why-us-grid">

                    <div>
                        <h3>Quality</h3>
                        <p>We focus on providing quality products.</p>
                    </div>

                    <div>
                        <h3>Reliable Service</h3>
                        <p>We value our customers and provide reliable service.</p>
                    </div>

                    <div>
                        <h3>Customer Support</h3>
                        <p>We are always here to help our customers.</p>
                    </div>

                </div>

            </section>


            {/* Gallery Preview */}
            <section className="gallery-preview">

                <SectionTitle
                    title="Our Gallery"
                    subtitle="Take a look at our products and activities."
                />

                <button>
                    View Gallery
                </button>

            </section>


            {/* Call To Action */}
            <section className="cta">

                <h2>Interested in Our Products?</h2>

                <p>
                    Explore our products and get in touch with us.
                </p>

                <button>
                    Contact Us
                </button>

            </section>

        </div>
    );
}

export default Home;