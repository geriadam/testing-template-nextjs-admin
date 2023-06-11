'use client'
import React, { useContext, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import {
  SearchIcon,
  ChatIcon,
  BellIcon,
  HelpIcon,
  MenuIcon,
  MeIcon,
  SettingIcon,
  LogoutIcon,
  DropdownIcon
} from '../icons'
import Avatar from '@components/Avatar'
import Input from '@components/Input'
import Dropdown from '@components/Dropdown'
import DropdownItem from '@components/DropdownItem'
import Badge from '@components/Badge'

function Header() {
  const sidebarContext = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800 border-b border-[#D4DCE7] h-[64px]">
      <div className="container flex items-center justify-between h-full px-4 mx-auto text-blue-600 dark:text-blue-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-blue"
          onClick={sidebarContext?.toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="hidden lg:flex w-1/4 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-blue-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-10 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-2">
          {/* <!-- Chat menu --> */}
          <li className="flex">
            <button
              className="p-2 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-gray-100"
              aria-label="Chat"
            >
              <ChatIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="p-2 relative align-middle rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-gray-100"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert('Alerts!')}>
                <span>Alerts</span>
              </DropdownItem>
            </Dropdown>
          </li>
          {/* <!-- Help menu --> */}
          <li className="flex">
            <button
              className="p-2 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-gray-100"
              aria-label="Chat"
            >
              <HelpIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="p-2 rounded-full focus:shadow-outline-blue focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <div className="flex align-middle items-center gap-2">
                <Avatar
                  className="align-middle"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt=""
                  aria-hidden="true"
                />
                <div class="hidden lg:inline-flex flex-col items-start justify-start">
                  <p class="text-sm font-bold leading-normal text-gray-900">Ani Mustofa</p>
                  <p class="text-xs leading-snug text-gray-400">Marketing Staff</p>
                </div>
                <DropdownIcon className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem className="gap-2" tag="a" href="#">
                <MeIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem className="gap-2" tag="a" href="#">
                <SettingIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem className="gap-2" onClick={() => alert('Log out!')}>
                <LogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header