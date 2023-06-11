import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

const routes = [
  {
    section: 'dashboard',
    icon: 'DashboardIcon',
    name: 'Dashboard',
  },
  {
    section: 'manage',
    name: 'Manage',
    child: [
      {
        icon: 'ProfileUserIcon',
        name: 'Client',
        routes: [
          // submenu
          {
            path: '/new-client',
            name: 'New client',
          },
          {
            path: '/list-client',
            name: 'List client',
          }
        ],
      },
      {
        icon: 'ProjectIcon',
        name: 'Project',
        routes: [
          // submenu
          {
            path: '/new-project',
            name: 'New Project',
          },
          {
            path: '/list-project',
            name: 'List Project',
          }
        ],
      },
      {
        icon: 'OfficeBagIcon',
        name: 'Finance',
        routes: [
          // submenu
          {
            path: '/new-finance',
            name: 'New finance',
          },
          {
            path: '/list-finance',
            name: 'List finance',
          }
        ],
      },
    ]
  },
  {
    section: 'other',
    name: 'Other',
    child: [
      {
        icon: 'MeIcon',
        name: 'User Profile',
      },
      {
        icon: 'SettingIcon',
        name: 'Setting',
      },
      {
        icon: 'LogoutIcon',
        name: 'Logout',
      },
    ]
  }
]

function SidebarContent() {
  return (
    <div className="py-4 pt-0 text-gray-500 dark:text-gray-400 border-r border-[#D4DCE7] h-full">
      <a className="flex items-center min-h-[64px] align-middle pl-6 text-lg font-bold text-gray-800 dark:text-gray-200 border-b border-[#D4DCE7]" href="#">
        <Image
          src='/logo-sidebar.png'
          alt="Logo"
          width={84}
          height={24}
          className='h-[24px] w-[84px]'
        />
      </a>
      <ul className="mt-4">
        {routes.map((route) => (
          route.section === 'dashboard' ? (
            <li key={route.name} className="relative flex items-center px-6 py-4 hover:bg-[#ECF5FF]">
              <Link
                href="/"
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 ${route.name === 'Dashboard' ? 'text-blue-500' : 'text-gray-900'} hover:text-blue-500 dark:hover:text-gray-200`}
                activeClassName="text-blue-500"
              >
                <span className="absolute inset-y-0 left-0 w-1 bg-[#4098FF] rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </Link>
            </li>
          ) : (
            <>
            <div class="flex flex-col space-y-4 items-start justify-end px-6 py-4">
              <p class="w-full text-sm font-semibold leading-normal text-gray-400 pt-4 border-t border-[#D4DCE7]">{route.name}</p>
            </div>
              {route.child.map((childRoute) => (
                <div>
                  {childRoute.routes ? (
                    <SidebarSubmenu key={childRoute.name} route={childRoute} />
                  ) : (
                    <div className='relative flex items-center px-6 py-4 hover:bg-[#ECF5FF]'>
                      <Link
                        key={childRoute.name}
                        href="/"
                        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 text-gray-900 hover:text-blue-500 dark:hover:text-gray-200"
                        activeClassName="text-blue-500"
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" icon={childRoute.icon} />
                        <span className="ml-4">{childRoute.name}</span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </>
          )
        ))}
      </ul>
    </div>
  )
}

export default SidebarContent