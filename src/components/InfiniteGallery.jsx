import { useEffect, useState } from "react";
import { CardImage } from "./CardImage";
import { Loader } from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { addPhotos, clrGallery, loadPage } from "../store/photosSlice";

export const InfiniteGallery = ({ queryFn, ...args }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const photos = useSelector((state) => state.photos.loadedPhotos);
  const page = useSelector((state) => state.photos.page);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setActive(true);
    dispatch(clrGallery());
  }, [args.query]);

  useEffect(() => {
    const sentinel = document.querySelector("#sentinel");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isActive) {
          setLoading(true);
          queryFn({ ...args, pageNum: page }).then((newImages) => {
            if (newImages.length === 0) {
              setActive(false);
              setLoading(false);
              return;
            }
            setTimeout(() => {
              dispatch(addPhotos(newImages));
              setLoading(false);
              dispatch(loadPage());
            }, 500);
          });
        }
      },
      { threshold: 0.5, rootMargin: "500px" }
    );
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, [args]);

  return (
    <>
      <Loader isloading={loading} />
      {photos.length ? (
        photos.map((img) => <CardImage imgData={img} key={img.id} />)
      ) : (
        <p>No results for this request. Try to refine your search query.</p>
      )}
      <div style={{ height: "2rem" }} id="sentinel" />
    </>
  );
};
