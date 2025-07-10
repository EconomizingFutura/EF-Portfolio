import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2GlxTNNofC0EUTl_65SBLtVW3GnYfjjU",
  authDomain: "economizingfutura-analytics.firebaseapp.com",
  projectId: "economizingfutura-analytics",
  storageBucket: "economizingfutura-analytics.firebasestorage.app",
  messagingSenderId: "60468919057",
  appId: "1:60468919057:web:f311dd2dfba0ff82326ab0",
  measurementId: "G-YQFLEF1HEJ",
};

export function getFirebaseApp() {
  if (typeof window === "undefined") {
    throw new Error("Firebase can only be initialized in the client.");
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export async function getAnalyticsClient() {
  if (typeof window === "undefined") return null;

  const supported = await isSupported();
  if (!supported) return null;

  const app = getFirebaseApp();
  return getAnalytics(app);
}

export function getFirestoreClient() {
  const app = getFirebaseApp();
  return getFirestore(app);
}
