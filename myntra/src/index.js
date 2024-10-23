import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import Comman from './Page/Comman';

const root = ReactDOM.createRoot(document.getElementById('root'));
let webroute = createBrowserRouter(
  [
    {
    path:'/',
    element:<Home/>
    },

    {
      path:'men',
      element:<Comman/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={webroute} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
