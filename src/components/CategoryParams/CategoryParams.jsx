import { useSelector } from "react-redux";
import { Amount } from "../elements/Amount.styles";
import { CategoryContainer } from "./CategoryContainer.styles";
import { DropDownMenu } from "./DropDownMenu";
import { FiltersContainer } from "./FiltersContainer.styles";
import { ORIENTATION_OPTIONS, SIZE_OPTIONS } from './../../utils/constants';
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
          options={ORIENTATION_OPTIONS}
        />
        <DropDownMenu
          paramName="size"
          options={SIZE_OPTIONS}
        />
      </FiltersContainer>
    </CategoryContainer>
  );
};

export default CategoryParams;
