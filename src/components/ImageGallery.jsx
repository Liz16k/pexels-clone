import { CardImage } from "./CardImage";

const ImageGallery = ({ imgs }) => {
  return (
    imgs.length && imgs.map((img) => <CardImage imgData={img} key={img.id} />)
  );
};

export default ImageGallery;
