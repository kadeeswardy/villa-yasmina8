import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // تأكد من المسار الصحيح
import './index.css'; // إذا كان لديك ملف CSS مخصص

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
