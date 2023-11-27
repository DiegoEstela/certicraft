import { useQuery } from "react-query";
import { firestore } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const fetchUserData = async (uid) => {
  try {
    const userRef = doc(firestore, "clientes", uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return "NO_CLIENTE";
    }
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    throw error;
  }
};

const useGetCompanyData = (uid) => {
  return useQuery(["clientes", uid], () => fetchUserData(uid));
};

export default useGetCompanyData;
