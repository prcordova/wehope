import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAptdbR1A2sIIoZyv6_hLmcrYX7VKtinME",
  authDomain: "fir-react-auth-44ef7.firebaseapp.com",
  projectId: "fir-react-auth-44ef7",
  storageBucket: "fir-react-auth-44ef7.appspot.com",
  messagingSenderId: "1078469204311",
  appId: "1:1078469204311:web:1aa08bc4d12c9d00d3c612",
  measurementId: "G-Z8TN2HLNH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);