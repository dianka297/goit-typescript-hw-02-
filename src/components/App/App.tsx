import css from "./App.module.css";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchPhotos } from "../../photos-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import EmptyResult from "../EmptyResult/EmptyResult";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { ModalImage, Photo } from "./App.types";

const defaultModalImage: ModalImage = {
  alt_description: "",
  regular: "",
};

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage>(defaultModalImage);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);

  const handleSearch = (newQuery: string) => {
    setPhotos([]);
    setQuery(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(defaultModalImage);
  };

  const openModal = (photo: ModalImage) => {
    setModalIsOpen(true);
    setModalImage({
      alt_description: photo.alt_description,
      regular: photo.regular,
    });
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getFhotos() {
      try {
        setLoading(true);
        setIsEmpty(false);
        setError(false);
        const data = await fetchPhotos(query, page);
        if (data.total === 0) {
          setIsEmpty(true);
          return;
        }
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        setShowLoadMore(page < data.total_pages);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getFhotos();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
      {isEmpty && <EmptyResult />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {photos.length > 0 && !loading && showLoadMore && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage.regular}
        alt={modalImage.alt_description}
      />
    </div>
  );
}