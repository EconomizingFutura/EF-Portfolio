import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getFirebaseApp } from "@/config/firebaseConfig";

export function useShowBlogsCount(slug: string) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      const app = getFirebaseApp();
      const db = getFirestore(app);
      const docRef = doc(db, "blogs", slug);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setViews(data.views || 0);
      } else {
        setViews(0);
      }
    };

    fetchViews();
  }, [slug]);

  return views;
}
