export const handlePercentageChange = (
  e,
  index,
  setTotalPercentage,
  setErrorMessage
) => {
  const inputValue = e.target.value;
  const parsedValue = parseFloat(inputValue);

  if (!isNaN(parsedValue)) {
    const newTotalPercentage = 100 - parsedValue;

    if (!isNaN(newTotalPercentage) && newTotalPercentage >= 0) {
      setTotalPercentage(newTotalPercentage);
      setErrorMessage("");
    } else {
      setErrorMessage(`El porcentaje para #${index} es inválido.`);
    }
  } else {
    setTotalPercentage(100);
    setErrorMessage("");
  }
};
