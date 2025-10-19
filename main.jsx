import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';

export default function Main() {
    return (
        <main className="Main">
            <h1>Blake Hansen</h1>
            <ul className="facts-list">
                <li>Experienced Software Engineer</li>
                <li>Expected Graduation 12/15/2025</li>
            </ul>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
