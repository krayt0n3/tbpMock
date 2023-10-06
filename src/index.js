import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './pages/error';
import LPM from './pages/lpm';
import reportWebVitals from './reportWebVitals';
import Bookshop from './pages/bookstore';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
      {
        path: '/law-practice-management',
        element: <LPM />
      },
      {
        path: '/bookshop',
        element: <Bookshop />
      },
      {
        path: '/home',
        element: <Home />
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
