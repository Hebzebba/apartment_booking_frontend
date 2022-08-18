import ImageGallery from "react-image-gallery";

const ImageGalleryComponent = ({ images }) => {
  let image_data = [];
  for (let i = 0; i < images.length; i++) {
    image_data.push({ original: images[i], thumbnail: images[i] });
  }

  return <ImageGallery items={image_data} />;
};

export default ImageGalleryComponent;
