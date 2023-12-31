import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../context/ThemeContext'

const TableCell = React.forwardRef(function TableCell(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableCell },
  } = useContext(ThemeContext)

  const baseStyle = tableCell.base

  const cls = classNames(baseStyle, className)

  return (
    <td className={cls} ref={ref} {...other}>
      {children}
    </td>
  )
})

export default TableCell