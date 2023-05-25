import { useEffect, useState } from "react";
import { DropDownContainer } from "/src/styles/elements/DropDownMenu/DropDownContainer";
import { DropDownList } from "/src/styles/elements/DropDownMenu/DropDownList";
import { ListItem } from "/src/styles/elements/DropDownMenu/ListItem";
import { useLocation, useNavigate } from "react-router-dom";

export const DropDownMenu = ({ options, paramName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate({
      search: "",
    });
  }, []);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClick = (value) => {
    const searchParams = getSearchParams(value);
    if (selectedOption != value) setSelectedOption(value);
    setIsOpen(false);
    navigate({
      search: new URLSearchParams(searchParams).toString(),
    });
  };

  function getSearchParams(newValue) {
    const searchparams = new URLSearchParams(location.search);
    const params = {
      size: searchparams.get("size"),
      orientation: searchparams.get("orientation"),
    };
    params[paramName] = newValue;

    return Array.from(Object.keys(params)).reduce((res, key) => {
      return params[key] && params[key] != "all"
        ? { ...res, [key]: params[key] }
        : { ...res };
    }, {});
  }

  return (
    <DropDownContainer isOpen={isOpen}>
      <div onClick={() => toggleIsOpen()}>
        {paramName == "orientation" ? (
          <img src="/src/assets/orientation.svg" alt="orientation" />
        ) : (
          <img src="/src/assets/size.svg" alt="size" />
        )}
        <p>{options[selectedOption]}</p>
      </div>
      {isOpen && (
        <DropDownList>
          {Object.entries(options).map((option, i) => (
            <ListItem key={i} onClick={() => onOptionClick(option[0])}>
              {option[1]}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
