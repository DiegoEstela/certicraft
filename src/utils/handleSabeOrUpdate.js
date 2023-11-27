import Swal from "sweetalert2";
import { saveDataCompany } from "../services/saveDataCompany";
import { updateDataCompany } from "../services/updateDataCompany";

export const handleSaveOrUpdate = async (uid, data, metodQuery, handleEdit) => {
  try {
    if (metodQuery === "update") {
      // Estás editando un cliente existente
      const updateOk = await updateDataCompany(uid, data);
      if (updateOk) {
        Swal.fire({
          icon: "success",
          title: "Datos actualizados",
          text: `Los datos se actualizaron correctamente.`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al acutalizar los datos",
        });
      }
    }

    if (metodQuery === "save") {
      // Estás creando un nuevo cliente
      const saveOk = await saveDataCompany(uid, data);

      if (saveOk) {
        const res = await Swal.fire({
          icon: "success",
          title: "Cliente Creado",
          text: `El cliente se creo correctamente.`,
        });
        res && window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "No se pudo crear el cliente",
        });
      }
    }
    handleEdit();
  } catch (error) {
    console.error("Error al procesar los datos:", error);
  }
};
