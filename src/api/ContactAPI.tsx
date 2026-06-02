import { getFirestoreClient } from "@/config/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
}

interface ContactResponse {
  success: boolean;
  message?: string;
}

/**
 * Saves a contact / enquiry submission to the Firestore `contacts` collection.
 * Requires a Firestore security rule allowing `create` on `contacts`
 * (see project README / Firebase console rules).
 */
export const contactAPI = async (
  data: ContactData,
  setLoading?: (loading: boolean) => void
): Promise<ContactResponse> => {
  try {
    setLoading?.(true);

    const db = getFirestoreClient();
    await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("contactAPI: failed to save submission", error);
    throw error;
  } finally {
    setLoading?.(false);
  }
};
