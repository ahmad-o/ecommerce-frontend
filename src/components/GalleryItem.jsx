function GalleryItem({ item }) {

    return (
        <div className="gallery-item">

            {item.type === "image" ? (

                <img
                    src={item.src}
                    alt={item.title}
                />

            ) : (

                <video
                    controls
                    src={item.src}
                />

            )}

            <h3>{item.title}</h3>

        </div>
    );
}

export default GalleryItem;