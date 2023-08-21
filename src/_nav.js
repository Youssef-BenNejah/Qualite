import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilDescription,
  cilDrop,
  cilContact,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"  />,
    
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },

  {
    component: CNavGroup,
    name: 'Métrique',
    to: '/base',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'PH',
        to: '/ph',
      },
      {
        component: CNavItem,
        name: 'Turbidité',
        to: '/turbidité',
      },
      {
        component: CNavItem,
        name: 'Oxigéne dissous',
        to: '/Oxigéne_dissous',
      },
      {
        component: CNavItem,
        name: 'Chlore résiduel',
        to: '/Chlore_résiduel',
      },
      {
        component: CNavItem,
        name: 'Conductivité',
        to: '/Conductivité',
      },
      {
        component: CNavItem,
        name: 'Température',
        to: '/Température',
      },
      
    ],
  },
  {
    component: CNavItem,
    name: 'Gestion Métrique',
    to: '/gestion_metrique',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contact',
    to: '/Contact',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  
  {
    component: CNavItem,
    name: 'Notifications',
    to: '/Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  
  
  
]

export default _nav
