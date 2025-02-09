import { FC } from "react";
import { ModalImage } from "../App/App.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  alt: string;
  src: {
    small: string;
    regular: string;
  };
  likes: number;
  name: string;
  openModal: (photo: ModalImage) => void;
}

const ImageCard: FC<ImageCardProps> = ({
  alt,
  src,
  likes,
  name,
  openModal,
}) => {
  return (
    <>
      <img
        className={css.photo}
        src={src.small}
        alt={alt}
        onClick={() =>
          openModal({
            regular: src.regular,
            alt_description: alt,
          })
        }
      />
      <div className={css.info}>
        <p className={css.text}>Author: {name}</p>
        <p className={css.text}>Likes: {likes}</p>
      </div>
    </>
  );
};

export default ImageCard;