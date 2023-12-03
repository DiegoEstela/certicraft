import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";
import moment from "moment";

export const saveFodaAnalice = async (uid, fodaData, date) => {
  try {
    const dateString = moment(date?.$d).format("DDMMYYYY");
    const dateFormatted = moment(date?.$d).toDate();
    const dateUid = `${dateString}01`;
    const userDocRef = doc(firestore, "clientes", uid);
    const nuevaColeccionRef = collection(userDocRef, "FODA");
    const nuevoDocumentoRef = doc(nuevaColeccionRef, dateUid);

    const cleanFodaData = {};
    Object.keys(fodaData).forEach((key) => {
      if (fodaData[key] !== undefined) {
        cleanFodaData[key] = fodaData[key];
      }
    });

    await setDoc(nuevoDocumentoRef, {
      ...cleanFodaData,
      _vigencia: Timestamp.fromDate(dateFormatted),
      _version: 1,
    });

    return true;
  } catch (error) {
    console.error("Error al guardar datos:", error);
    return false;
  }
};
