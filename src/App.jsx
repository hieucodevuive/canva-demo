import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'
import Layout from './pages/Layout'
import Main from './pages/Main'
import Home from './components/Home'
import Templates from './components/Templates'
import Projects from './components/Projects'
import CreateDesign from './components/CreateDesign'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/templates',
        element: <Templates />
      },
      {
        path: '/Projects',
        element: <Projects />
      }
    ]
  },
  {
    path: '/design/create',
    element: <CreateDesign />
  },
  {
    path: '/design/edit',
    element: <Main />
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
