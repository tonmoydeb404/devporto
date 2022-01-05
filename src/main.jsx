import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PersonProvider } from './context/PersonContext';

ReactDOM.render(
    <PersonProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PersonProvider>,
    document.getElementById('root')
);
