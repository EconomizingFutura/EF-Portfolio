import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2GlxTNNofC0EUTl_65SBLtVW3GnYfjjU",
  authDomain: "economizingfutura-analytics.firebaseapp.com",
  projectId: "economizingfutura-analytics",
  storageBucket: "economizingfutura-analytics.firebasestorage.app",
  messagingSenderId: "60468919057",
  appId: "1:60468919057:web:f311dd2dfba0ff82326ab0",
  measurementId: "G-YQFLEF1HEJ"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

console.log(app,analytics)
export { analytics };
