'use client'
import React, { useContext } from 'react'

import Sidebar from '@components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import { SidebarContext } from '../context/SidebarContext'

function Layout({ children }) {
  const sidebarContext = useContext(SidebarContext)

  return (
    <div
      className={`flex h-screen bg-white dark:bg-gray-900 ${sidebarContext?.isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          {children}
        </Main>
      </div>
    </div>
  )
}

export default Layout