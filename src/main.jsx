import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.jsx'

import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App2/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
