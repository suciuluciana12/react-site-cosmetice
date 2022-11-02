import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

export const navData = [
  {
    title: 'Home/Contact',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'Îngrijirea feței',
    path: '/ingrijirea_fetei',
    icon: <FaIcons.FaEmpire />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Ten normal/uscat',
        path: '/ingrijirea_fetei/ten_normal_uscat/toate',
      },
      {
        title: 'Ten gras/mixt',
        path: '/ingrijirea_fetei/ten_gras_mixt/toate',
      },

      {
        title: 'Seruri/Contur ochi',
        path: '/ingrijirea_fetei/seruri_contur_ochi',
      },
      {
        title: 'Curățare/Igiena orală/Igiena urechii',
        path: '/ingrijirea_fetei/curatare_igiena_orala',
      },
      {
        title: 'Măști /Depigmentare /Balsam de buze',
        path: '/ingrijirea_fetei/masti_depigmentare/toate',
      },
    ],
  },
  {
    title: 'Îngrijirea corpului',
    path: '/ingrijirea_corpului/toate',
    icon: <FaIcons.FaEmpire />,
  },
  {
    title: 'Îngrijirea părului',
    path: '/ingrijirea_parului',
    icon: <FaIcons.FaEmpire />,
  },
  {
    title: 'Probleme dermatologice',
    path: '/probleme_dermatologice/toate',
    icon: <FaIcons.FaEmpire />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
]
