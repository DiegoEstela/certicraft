import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

export const updateDataCompany = async (uid, updatedData) => {
  try {
    const userDocRef = doc(firestore, "clientes", uid);
    await updateDoc(userDocRef, updatedData);
    return true;
  } catch (error) {
    console.error("Error al actualizar datos:", error);
    return false;
  }
};
