import { useSelector } from "react-redux";
import { Amount } from "./../styles/elements/Amount";
import { CategoryContainer } from "./../styles/elements/CategoryContainer";
import { DropDownMenu } from "./DropDownMenu";
const CategoryParams = () => {
  const total = useSelector((state) => state.photos.responsePhotoAmount);
  return (
    <CategoryContainer>
      <Amount>
        Фото <span>{total}</span>
      </Amount>
      <div>
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
      </div>
    </CategoryContainer>
  );
};

export default CategoryParams;
