import { useSelector } from "react-redux";
import { Amount } from "../elements/Amount.styles";
import { CategoryContainer } from "./CategoryContainer.styles";
import { DropDownMenu } from "./DropDownMenu";
import { FiltersContainer } from "./FiltersContainer.styles";
const CategoryParams = () => {
  const total = useSelector((state) => state.photos.responsePhotoAmount);
  return (
    <CategoryContainer>
      <Amount>
        Фото <span>{total}</span>
      </Amount> 
      <FiltersContainer>
        <DropDownMenu
          paramName="orientation"
          options={{
            all: "все ориентации",
            landscape: "горизонтальная",
            portrait: "вертикальная",
            square: "квадратное изображение",
          }}
        />
        <DropDownMenu
          paramName="size"
          options={{
            all: "все размеры",
            large: "большой",
            medium: "средний",
            small: "маленький",
          }}
        />
      </FiltersContainer>
    </CategoryContainer>
  );
};

export default CategoryParams;
