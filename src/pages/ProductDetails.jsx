import { useState } from "react";
import { useParams } from "react-router-dom";

import products from "../data/products";

function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    const [selectedImage, setSelectedImage] = useState(
        product?.images?.[0]
    );


    // Product doesn't exist
    if (!product) {
        return (
            <section className="product-not-found">
                <h1>Product Not Found</h1>

                <p>
                    The product you are looking for does not exist.
                </p>
            </section>
        );
    }


    return (
        <section className="product-details">

            {/* Product Images */}

            <div className="product-gallery">

                {/* Main Image */}

                <div className="main-product-image">

                    <img
                        src={selectedImage}
                        alt={product.name}
                    />

                </div>


                {/* Thumbnails */}

                <div className="product-thumbnails">

                    {product.images.map((image, index) => (

                        <button
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className={
                                selectedImage === image
                                    ? "thumbnail active"
                                    : "thumbnail"
                            }
                        >

                            <img
                                src={image}
                                alt={`${product.name} ${index + 1}`}
                            />

                        </button>

                    ))}

                </div>

            </div>


            {/* Product Information */}

            <div className="product-details-info">

                <h1>{product.name}</h1>

                <p className="details-price">
                    ৳{product.price.toLocaleString()}
                </p>

                <p className="details-short-description">
                    {product.shortDescription}
                </p>

                <hr />

                <h2>Description</h2>

                <p className="details-description">
                    {product.description}
                </p>

            </div>

        </section>
    );
}

export default ProductDetails;