import { Link } from "react-router-dom";

export const Suggestions = () => {
  const categoryList =
    "бизнес горы путешествие еда пляж лес цветы темный автомобиль технологии природа абстрактный пейзаж небо космос собака кот медведь кофе текстура офис горы дорога замок поле".split(
      " "
    );

  const suggestCategories = getUniqueRandomNums(7).map(
    (index) => categoryList[index]
  );

  return suggestCategories.map((category) => {
    return (
      <Link to={`/search/${encodeURIComponent(category)}`} key={category}>
        {category}
      </Link>
    );
  });
};

function getUniqueRandomNums(n) {
  let set = new Set();
  while (set.size < n) {
    set.add(Math.floor(Math.random() * n));
  }
  return Array.from(set);
}

export default Suggestions;
