import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/Contact/Contact'
import Github from './components/github/Github'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
          },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path : 'github',
        element :<Github/>
      },
      {
        path : 'github/:userid',
        element :<Github/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
    
  </StrictMode>,
)
