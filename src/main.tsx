import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './Login'
import Home from './Home'
import Settings from './Settings'

import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      { index: true, element: "Dashboard content! ".repeat(100) },
      { path: "dashboard", element: "Dashboard content! ".repeat(100) },
      { path: "references", element: "References content!".repeat(10) },
      { path: "settings", element: <Settings /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
