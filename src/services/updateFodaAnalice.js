import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

export const updateFodaAnalice = async (
  uid,
  fodaData,
  vigencia,
  version,
  dateUid
) => {
  try {
    const userDocRef = doc(firestore, "clientes", uid);
    const nuevaColeccionRef = collection(userDocRef, "FODA");
    const nuevoDocumentoRef = doc(nuevaColeccionRef, dateUid);

    const existingDoc = await getDoc(nuevoDocumentoRef);

    if (existingDoc.exists()) {
      await updateDoc(nuevoDocumentoRef, {
        ...fodaData,
        _vigencia: vigencia,
        _version: version,
      });
    } else {
      // El documento no existe, lo creamos
      return;
    }

    return true;
  } catch (error) {
    console.error("Error al guardar datos:", error);
    return false;
  }
};
