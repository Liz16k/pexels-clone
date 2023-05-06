import { useEffect, useState } from "react";
import { CardImage } from "./CardImage";

export const InfiniteGallery = ({ queryFn, ...args }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const sentinel = document.querySelector("#sentinel");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          queryFn({ ...args, pageNum: page }).then((response) => {
            setImages([...images, ...response]);
            setPage(page + 1);
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
      {images.length &&
        images.map((img) => <CardImage imgData={img} key={img.id} />)}
      <div
        style={{ height: "50px", backgroundColor: "#19ab76" }}
        id="sentinel"
      />
    </>
  );
};
