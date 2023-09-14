import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgetPage from './Components/ForgetPage'
import CreateAccount from './Components/CreateAccount'
import LoginPage from './Components/LoginPage'
import ButtonsPage from './Components/ButtonsPage'
import Dashboard from './Components/Dashboard'
import Cards from './Components/Cards'
import NoPage from './Components/NoPage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
    {
      path: "/button",
      element: <ButtonsPage />
    },
    {
      path: "/card",
      element: <Cards />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/create/account",
      element: <CreateAccount />
    },
    {
      path: "/forget/password",
      element: <ForgetPage />
    },
    {
      path: "*",
      element: <NoPage />
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App