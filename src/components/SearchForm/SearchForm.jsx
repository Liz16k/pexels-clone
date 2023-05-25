import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SearchButton from "./SearchButton.styles";
import SearchContainer from "./SearchContainer.styles";
import SearchInput from "./SearchInput.styles";

const SearchForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      request: params.category,
    },
  });

  const onSubmit = (data) => {
    data.request && navigate(`search/${encodeURIComponent(data.request)}/`);
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
          placeholder="Поиск бесплатных изображений"
        />
        <SearchButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path d="M791.247-102.956 528.333-365.492q-29.435 23.42-68.791 36.826-39.357 13.405-84.644 13.405-112.774 0-191.09-78.369-78.316-78.37-78.316-189.703 0-111.334 78.37-189.704 78.37-78.369 190.036-78.369 111.667 0 189.703 78.369 78.037 78.37 78.037 189.804 0 44.363-13.058 83.182t-37.841 71.399l263.769 262.623-63.261 63.073Zm-416.882-300.45q75.077 0 127.102-52.536 52.025-52.536 52.025-127.391t-52.08-127.392q-52.081-52.536-127.047-52.536-75.522 0-128.125 52.536-52.602 52.537-52.602 127.392 0 74.855 52.547 127.391t128.18 52.536Z" />
          </svg>
        </SearchButton>
      </SearchContainer>
    </form>
  );
};

export default SearchForm;
