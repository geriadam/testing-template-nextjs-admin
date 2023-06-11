import React, { useState } from 'react'
import Link from 'next/link'
import { DropdownIcon } from '../../icons'
import * as Icons from '../../icons'
import Transition from "@components/Transition"

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarSubmenu({ route}) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen)
  }

  return (
    <li key={route.name}>
      <button
        className="flex items-center justify-between px-6 py-4 w-full p-2 text-sm font-semibold transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
          <span className="ml-4">{route.name}</span>
        </span>
        <DropdownIcon className="w-4 h-4" aria-hidden="true" />
      </button>
      <Transition
        show={isDropdownMenuOpen}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-25 max-h-0"
        enterTo="opacity-100 max-h-xl"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 max-h-xl"
        leaveTo="opacity-0 max-h-0"
      >
        <ul
          className="py-2 space-y-2"
          aria-label="submenu"
        >
          {route?.routes.map((r) => (
            <li
              key={r.name}
            >
              <Link className="flex items-center p-2 text-sm font-semibold transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" href={r.path}>
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </li>
  )
}

export default SidebarSubmenu