import { useQuery } from "react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../config/firebase";

const useGetFodaDocuments = (uid) => {
  const getFodaDocuments = async (uid) => {
    try {
      const userFodaCollectionRef = collection(
        firestore,
        "clientes",
        uid,
        "FODA"
      );
      const q = query(userFodaCollectionRef, orderBy("_vigencia", "desc"));
      const querySnapshot = await getDocs(q);

      const fodaDocuments = [];
      querySnapshot.forEach((doc) => {
        fodaDocuments.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return fodaDocuments[0];
    } catch (error) {
      console.error("Error al obtener documentos FODA:", error);
      return [];
    }
  };

  return useQuery(["fodaDocuments", uid], () => getFodaDocuments(uid));
};

export default useGetFodaDocuments;
