export function trasnforData(datos, title) {
  const result = [];
  const data = { name: title, data: result };

  for (const key in datos) {
    const keyParts = key.split("-");

    const [index, field] = keyParts;
    const existingItem = result.find(
      (item) => item.name === `${index}-${title}`
    );

    if (existingItem) {
      if (field === "importancia") {
        existingItem.importancia = datos[key];
      } else if (field.startsWith("interesado")) {
        const interesadoIndex = field.replace("interesado", "");
        existingItem.interesados[interesadoIndex] = datos[key];
      }
    } else {
      const newItem = {
        name: `${index}-${title}`,
        description: datos[key],
        interesados: {},
        importancia: "",
      };

      if (field === "importancia") {
        newItem.importancia = datos[key];
      } else if (field.startsWith("interesado")) {
        const interesadoIndex = field.replace("interesado", "");
        newItem.interesados[interesadoIndex] = datos[key];
      }

      result.push(newItem);
    }
  }

  return data;
}
