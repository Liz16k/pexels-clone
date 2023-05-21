import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SearchButton from "../styles/elements/SearchButton";
import SearchContainer from "../styles/elements/SearchContainer";
import SearchInput from "../styles/elements/SearchInput";

const SearchForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      request: params.category,
    },
  });

  const onSubmit = (data) => {
    navigate(`search/${encodeURIComponent(data.request)}`);
    removeFocus();
  };

  const removeFocus = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SearchContainer>
        <SearchInput
          type="text"
          {...register("request")}
          placeholder="Search for free photos"
        />
        <SearchButton />
      </SearchContainer>
    </form>
  );
};

export default SearchForm;
