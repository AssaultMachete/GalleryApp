const Gallery = ({ images, title, imgClassName }) => {
  return (
    <div className="gallery">
      {title && (
        <h2 className="text-3xl font-bold text-white text-center mb-5">
          {title}
        </h2>
      )}
      <div className="flex flex-wrap justify-between items-center">
        {images.map((image, index) => (
          <div>
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={imgClassName || ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
