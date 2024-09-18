import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Tailwind CSS or any global styles
import App from './App';  // Importing the App component
import { AuthProvider } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';  // Optional for performance tracking

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();  // Optional, can be removed if not needed
