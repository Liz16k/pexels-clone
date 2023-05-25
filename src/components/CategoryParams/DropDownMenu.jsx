import { useEffect, useState } from "react";
import { DropDownContainer } from "./DropDownContainer.styles";
import { DropDownList } from "./DropDownList.styles";
import { ListItem } from "./ListItem.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchParams } from './../../utils/getSearchParams';

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
    const searchParams = getSearchParams(value, paramName, location.search);
    if (selectedOption != value) setSelectedOption(value);
    setIsOpen(false);
    navigate({
      search: new URLSearchParams(searchParams).toString(),
    });
  };

  return (
    <DropDownContainer>
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
