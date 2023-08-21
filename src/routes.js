import React from 'react'
import Login from './views/pages/login/Login'
import Profile from './views/Profile/Profile'




// Base
const PH = React.lazy(() => import('./views/Ph/Ph'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Turbidite = React.lazy(() => import('./views/Turbidite/Turbidite'))
const Oxigéne_dissous = React.lazy(() => import('./views/Oxigéne_dissous/Oxigéne_dissous'))
const Chlore_résiduel = React.lazy(() => import('./views/Chlore_résiduel/Chlore_résiduel'))
const Conductivité = React.lazy(() => import('./views/Conductivité/Conductivité'))
const Température = React.lazy(() => import('./views/Température/Température'))
const Gestion_metrique = React.lazy(() => import('./views/Gestion_metrique/Gestion_metrique'))
const Notifications = React.lazy(() => import('./views/Notifications/Notifications'))
const Contact = React.lazy(() => import('./views/Contact/Contact'))







const routes = [
  { path: '/login', name: 'login', element: Login },

  { path: '/ph', name: 'Ph', element: PH },
  { path: '/turbidité', name: 'Turbidite', element: Turbidite },
  { path: '/Oxigéne_dissous', name: 'Oxigéne dissous', element: Oxigéne_dissous },
  { path: '/Chlore_résiduel', name: 'Chlore résiduel', element: Chlore_résiduel },
  { path: '/Conductivité', name: 'Conductivité', element: Conductivité },
  { path: '/Température', name: 'Température', element: Température },
  { path: '/gestion_metrique', name: 'Gestion_metrique', element: Gestion_metrique },
  { path: '/Contact', name: 'Contact', element: Contact },

  { path: '/Notifications', name: 'Notifications', element: Notifications },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/profile', name: 'Profile', element: Profile },




 ,
]

export default routes
