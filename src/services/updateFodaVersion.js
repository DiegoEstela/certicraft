import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

export const updateFodaVersion = async (
  uid,
  fodaData,
  vigencia,
  version,
  dateUid
) => {
  try {
    const dateIdNewVersion = `${dateUid.slice(0, -2)}V${version + 1}`;
    const userDocRef = doc(firestore, "clientes", uid);
    const nuevaColeccionRef = collection(userDocRef, "FODA");
    const nuevoDocumentoRef = doc(nuevaColeccionRef, dateIdNewVersion);

    const cleanFodaData = {};
    Object.keys(fodaData).forEach((key) => {
      if (fodaData[key] !== undefined) {
        cleanFodaData[key] = fodaData[key];
      }
    });

    await setDoc(nuevoDocumentoRef, {
      ...cleanFodaData,
      _vigencia: vigencia,
      _version: version + 1,
    });

    return true;
  } catch (error) {
    console.error("Error al guardar datos:", error);
    return false;
  }
};
