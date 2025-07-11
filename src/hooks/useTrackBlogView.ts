"use client";

import { useEffect } from "react";
import { getFirestoreClient } from "@/config/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

export function useTrackBlogView(slug: string) {
  useEffect(() => {
    const hasVisitedKey = `viewed_${slug}`;

    if (localStorage.getItem(hasVisitedKey)) {
      return;
    }

    const trackView = async () => {
      const db = getFirestoreClient();
      const docRef = doc(db, "blogs", slug);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        await updateDoc(docRef, {
          views: increment(1),
        });
      } else {
        await setDoc(docRef, { views: 1 });
      }

      localStorage.setItem(hasVisitedKey, "true");
    };

    trackView();
  }, [slug]);
}
