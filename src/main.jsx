import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import People from './pages/People.jsx'
import Error from './pages/Error.jsx'
import LogIn from './pages/LogIn.jsx'

import { Provider } from 'react-redux'
import { store } from './store.js'
import Aboutus from './pages/Aboutus.jsx'
import Contactus from './pages/Contactus.jsx'
import Nowplaying from './pages/Nowplaying.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/people",
          element: <People/>
        },
      {
        path:"/Aboutus",
        element:<Aboutus/>
      },
      {
        path:"/Contactus",
        element:<Contactus/>

      },
      {
        path:"Now playing",
        element:<Nowplaying/>
      }
      ],
      errorElement: <Error/>
    },
    {
      path: "/login",
      element: <LogIn/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)