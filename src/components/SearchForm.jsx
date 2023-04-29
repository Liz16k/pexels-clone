import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => { 
    navigate(`search/${encodeURIComponent(data.request)}`);};

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
