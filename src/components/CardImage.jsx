import { downloadImage } from "./../api";

export const CardImage = ({ imgData }) => {
  const { photographer, photographer_url, src, alt } = imgData;
  return (
    <div>
      <img src={src.medium} alt={alt} />
      <div>
        <div>
          <a href={photographer_url}>{photographer}</a>
        </div>
        <div>
          btns
          <button onClick={() => downloadImage(src.original, alt)}>
            download
          </button>
        </div>
      </div>
    </div>
  );
};
