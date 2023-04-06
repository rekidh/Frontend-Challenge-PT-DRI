
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Main from "./layouts/Main"
import Dashboard from './layouts/Dashboard'
import Costumer from './layouts/Customer'

export default function AppRouter() {

   const router = createBrowserRouter([
      {
         path : '/',
         element:<Main/>,
         children:[
            {
               path:'dashboard',
               element: <Dashboard/>
            },
            {
               path:'stock',
               element: <Dashboard/>
            },
            {
               path:'costumer',
               element: <Costumer/>
            },
            {
               path:'restaurant',
               element: <Costumer/>
            },
            {
               path:'design',
               element: <Costumer/>
            },
            {
               path:'role_admin',
               element: <Costumer/>
            }
         ]
      }
   ])

  return (
    <RouterProvider router={router} />
  )
}
