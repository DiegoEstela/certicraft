export const useParseText = (texto) => {
  const lineas = texto.split("\n");

  const arrayDeObjetos = lineas.map((linea) => {
    const [termino, ...resto] = linea.split(":");

    const textoCompleto = resto.join(":").trim();

    return {
      termino: termino.trim(),
      texto: textoCompleto,
    };
  });

  return arrayDeObjetos;
};
