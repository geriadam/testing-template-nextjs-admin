import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../context/ThemeContext'

const TableRow = React.forwardRef(function TableRow(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableRow },
  } = useContext(ThemeContext)

  const baseStyle = tableRow.base

  const cls = classNames(baseStyle, className)

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  )
})

export default TableRow