import PageHeader from "../components/PageHeader";
import GalleryItem from "../components/GalleryItem";

import galleryItems from "../data/gallery";

function Gallery() {
    return (
        <div>

            <PageHeader
                title="Gallery"
                description="Explore our images and videos."
            />


            <section className="gallery-page">

                <div className="gallery-grid">

                    {galleryItems.map((item) => (

                        <GalleryItem
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

            </section>

        </div>
    );
}

export default Gallery;