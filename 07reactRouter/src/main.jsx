import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import { createRoot } from 'react-dom/client'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"ContactUs",
//         element:<ContactUs/>
//       }
//     ]
//   }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      <Route loader={
        githubInfoLoader
      } path='GitHub' element={<GitHub/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
