import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // إذا كان لديك ملف index.css خاص
import App from "./App";
import "./styles/styles.css"; // استيراد ملف CSS الرئيسي

import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملفات CSS الخاصة بـ AOS

// تهيئة AOS
AOS.init({
  duration: 1200, // مدة التأثيرات (بالميلي ثانية)
  easing: "ease-in-out", // نوع التدرج
  once: true, // تنفيذ التأثير مرة واحدة فقط
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
