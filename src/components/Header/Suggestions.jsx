import { useEffect, useState } from "react";
import SuggestionLink from "./SuggestionLink.styles";
import { getUniqueRandomNums } from "./../../utils/getUniqueRandomNums";
import { CATEGORIES } from "./../../utils/constants";

export const Suggestions = () => {
  const initialSuggestCategories = [CATEGORIES.slice(7)];
  const [suggestCategories, setSuggestCategories] = useState(
    initialSuggestCategories
  );

  useEffect(() => {
    setSuggestCategories(
      getUniqueRandomNums(7).map((index) => CATEGORIES[index])
    );
  }, []);

  return suggestCategories.map((category) => {
    return (
      <SuggestionLink
        to={`/search/${encodeURIComponent(category)}/`}
        key={category}
      >
        {category + `${category == suggestCategories.at(-1) ? "" : ", "}`}
      </SuggestionLink>
    );
  });
};

export default Suggestions;
