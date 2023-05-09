import { useEffect, useState } from "react";
import { CardImage } from "./CardImage";
import { Loader } from "./Loader";

export const InfiniteGallery = ({ queryFn, ...args }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [args.query]);

  useEffect(() => {
    const sentinel = document.querySelector("#sentinel");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          queryFn({ ...args, pageNum: page }).then((response) => {
            setTimeout(() => {
              setImages([...images, ...response]);
              setPage(page + 1);
              setLoading(false);
            }, 500);
          });
        }
      },
      { threshold: 1 }
    );
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, [args, images, page, queryFn]);

  return (
    <>
      <Loader isloading={loading} />
      {images.length ? (
        images.map((img) => <CardImage imgData={img} key={img.id} />)
      ) : (
        <p>No results for this request. Try to refine your search query.</p>
      )}
      <div style={{ height: "2rem" }} id="sentinel" />
    </>
  );
};
