import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" {...register("request")} />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
