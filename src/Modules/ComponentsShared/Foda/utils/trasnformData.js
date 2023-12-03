export function transformData(datos, title) {
  const result = {};

  for (const key in datos) {
    const keyParts = key.split("-");
    const [index, field] = keyParts;

    if (!result[title]) {
      result[title] = {};
    }

    const currentItem = result[title][index] || {
      description: "",
      interesados: {
        Uno: "",
        Dos: "",
        Tres: "",
      },
      importancia: "",
      id: index,
    };

    if (field === "importancia") {
      currentItem.importancia = datos[key];
    } else if (field.startsWith("interesado")) {
      const interesadoIndex = field.replace("interesado", "");
      currentItem.interesados[interesadoIndex] = datos[key];
    } else {
      currentItem.description = datos[key];
    }

    result[title][index] = currentItem;
  }

  return result;
}
