import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

export const saveDataCompany = async (uid, datos) => {
  console.log(datos)
  console.log(uid)
  try {
    const userDocRef = doc(firestore, 'clientes', uid)
     await setDoc(userDocRef, datos);
    return true
  
  } catch (error) {
    console.error("Error al guardar datos:", error);
    return false;
  }}