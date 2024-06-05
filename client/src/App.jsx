import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path='/' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
