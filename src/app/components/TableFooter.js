import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../context/ThemeContext'

const TableFooter = React.forwardRef(function TableFooter(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableFooter },
  } = useContext(ThemeContext)

  const baseStyle = tableFooter.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableFooter