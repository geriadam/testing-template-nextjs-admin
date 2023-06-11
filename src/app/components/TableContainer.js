import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../context/ThemeContext'
import { LayoutIcon } from '../icons'

const TableContainer = React.forwardRef(function TableContainer(props, ref) {
  const { className, title, children, ...other } = props

  const {
    theme: { tableContainer },
  } = useContext(ThemeContext)

  const baseStyle = tableContainer.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      <div class="inline-flex w-full space-x-96 items-center justify-start py-2.5 pl-6 pr-2 bg-gray-600 rounded-tl rounded-tr">
        <p class="font-bold leading-7 text-white">{title}</p>
      </div>
      <div className='flex justify-between p-4 pl-6 pr-6'>
        <div className='text-xs'>
          <label className="flex gap-x-2 items-baseline">
            <span className="font-semibold text-[#394E69]">Show </span>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <span className="font-semibold text-[#394E69]">Entry </span>
          </label>
        </div>
        <LayoutIcon />
      </div>
      {children}
    </div>
  )
})

export default TableContainer