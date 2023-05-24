import { useEffect, useState } from "react";
import { DropDownContainer } from "/src/styles/elements/DropDownMenu/DropDownContainer";
import { DropDownListContainer } from "/src/styles/elements/DropDownMenu/DropDownListContainer";
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
    setSelectedOption(value);
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
    <DropDownContainer>
      <div onClick={() => toggleIsOpen()}>
        {paramName == "orientation" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M516-191 191-516q-18-20-18-46t18-46l166-165q18-20 44.988-20T449-773l325 325q19 19 19 46t-19 46L608-191q-18 20-44.988 20T516-191Zm46-39 172-172-331-332-172 172 331 332ZM478 1q-98.511 0-185.579-37.5-87.068-37.5-152.244-103Q75-205 37.5-292.181 0-379.361 0-478h60q0 80 28.5 151.5t78.5 127Q217-144 285.5-109T433-66L303-196l43-43L574-11q-23 7-47.482 9.5Q502.037 1 478 1Zm422-479q0-80-28-151.5T794.5-757Q745-813 677-848.5T530-892l128 128-43 43-228-228q23-6 45.5-8.5T478-960q100 0 187.5 38t153 103.5Q884-753 922-665.5T960-478h-60Zm-417-4Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="m370-280 45-47-83-84h295l-84 84 47 47 156-156-156-157-45 45 81 79H332l81-79-43-46-156 158 156 156ZM140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240l73 87h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120H140Zm680-60v-513H645l-73-87H388l-73 87H140v513h680ZM480-480Z" />
          </svg>
        )}
        <p>{options[selectedOption]}</p>
      </div>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {Object.entries(options).map((option, i) => (
              <ListItem key={i} onClick={() => onOptionClick(option[0])}>
                {option[1]}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
