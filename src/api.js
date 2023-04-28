import { createClient } from "pexels";

export const getData = async () => {
  const key = "JA9t93WzdvqLSVXTEtSvIOmuMkf1iwt5sVEOh8JV8GPWLj8QOkeBRS0S";
  const client = createClient(key);
  client.photos
    .curated({ per_page: 1 })
    .then((data) => data.photos[0])
    .catch((error) => console.log("getData: ", error));
};

getData();
