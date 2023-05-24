import { useEffect, useState } from "react";
import { CardImage } from "./CardImage";
import { Loader } from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addPhotos,
  clrGallery,
  loadPage,
  updateTotalPhotos,
} from "../store/photosSlice";
import Masonry from "react-masonry-css";
import { GalleryContainer } from "./../styles/elements/GalleryContainer";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const InfiniteGallery = ({ queryFn, ...args }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const photos = useSelector((state) => state.photos.loadedPhotos);
  const page = useSelector((state) => state.photos.page);
  const [isActive, setActive] = useState(true);
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const { size, orientation } = {
    size: searchparams.get("size"),
    orientation: searchparams.get("orientation"),
  };

  useEffect(() => {
    setActive(true);
    dispatch(clrGallery());
  }, [args.query, location]);

  useEffect(() => {
    const sentinel = document.querySelector("#sentinel");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isActive) {
          setLoading(true);
          queryFn({
            ...args,
            pageNum: page,
            params: {
              size,
              orientation,
            },
          })
            .then((response) => {
              if (args.type === "category") {
                if (page === 1) {
                  dispatch(updateTotalPhotos(response.total));
                }
                return response.photos;
              }
              return response;
            })
            .then((newImages) => {
              if (newImages.length === 0) {
                setActive(false);
                setLoading(false);
                return;
              }
              setTimeout(() => {
                dispatch(addPhotos(newImages));
                setLoading(false);
                dispatch(loadPage());
              });
            });
        }
      },
      { threshold: 0.5, rootMargin: "400px" }
    );
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, [args]);

  return (
    <GalleryContainer>
      <Loader isloading={loading} />
      {photos.length ? (
        <Masonry
          breakpointCols={isTabletOrMobile ? 2 : 3}
          className={"gallery"}
          columnClassName={"column"}
        >
          {photos.map((img) => (
            <CardImage imgData={img} key={img.id} />
          ))}
        </Masonry>
      ) : (
        <p>No results for this request. Try to refine your search query.</p>
      )}
      <div style={{ height: "2rem" }} id="sentinel" />
    </GalleryContainer>
  );
};
