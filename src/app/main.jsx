import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from './providers';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Providers>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Providers>,
);
