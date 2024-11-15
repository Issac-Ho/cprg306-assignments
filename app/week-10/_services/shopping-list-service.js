import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsRef);
    itemsSnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error fetching items: ", error);
  }
  return items;
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    return null;
  }
};
