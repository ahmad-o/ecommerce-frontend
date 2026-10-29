import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

function Products() {
    return (
        <div>

            <PageHeader
                title="Our Products"
                description="Explore our range of quality products."
            />


            <section className="products-page">

                <div className="product-grid">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </section>

        </div>
    );
}

export default Products;