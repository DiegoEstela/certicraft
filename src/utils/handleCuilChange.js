export const HandleCuitChange = (value) => {

    if (value) {
      value = value.replace(/\D/g, ""); 
      let formattedValue = "";

      for (let i = 0; i < value.length; i++) {
        if (i === 2 || i === 10) {
          formattedValue += "-";
        }
        formattedValue += value[i];
      }

      formattedValue = formattedValue.slice(0, 13);

      return formattedValue;
    }
    return value;
  };