import React, { Component, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import PrivateRoutes from './components/Private/PrivateRoute'
import Page404 from './views/pages/page404/Page404'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>

              <Route path="*" name="Home" element={<DefaultLayout />} />
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route path="/" element={<Navigate to="/login" />} />
              
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App