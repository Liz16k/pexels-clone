export const getSearchParams = (newValue, paramName, searchParams) => {
  const searchparams = new URLSearchParams(searchParams);
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
};
