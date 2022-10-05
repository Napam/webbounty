import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import Auth from './Auth'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <App/>
  },
  {
    path: "/helloworld",
    element: <div>Hello World!</div>
  },
  {
    path: "/auth",
    element: <Auth/>,
    errorElement:
      <div>
        <div>:(</div>
        <a href="/">Click here to go back</a>
      </div>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <RouterProvider router={router} />
)
