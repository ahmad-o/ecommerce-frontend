import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="product-card">

            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
            </div>

            <div className="product-info">

                <h3>{product.name}</h3>

                <p>
                    {product.shortDescription}
                </p>

                <p className="product-price">
                    ৳{product.price.toLocaleString()}
                </p>

                <Link
                    to={`/products/${product.id}`}
                    className="product-button"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
}

export default ProductCard;