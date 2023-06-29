import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Users from "./components/users";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Users/>
);

