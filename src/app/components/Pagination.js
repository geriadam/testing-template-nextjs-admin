'use client'
import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { ThemeContext } from '../context/ThemeContext'

const PrevIcon = function PrevIcon(props) {
  return (
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

const NextIcon = function NextIcon(props) {
  return (
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

export const NavigationButton = function NavigationButton({
  onClick,
  disabled,
  directionIcon,
}) {
  const ariaLabel = directionIcon === 'prev' ? 'Previous' : 'Next'

  const icon = directionIcon === 'prev' ? PrevIcon : NextIcon

  return (
    <Button
      size="small"
      layout="link"
      icon={icon}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    />
  )
}

export const PageButton = function PageButton({
  page,
  isActive,
  onClick,
}) {
  return (
    <Button size="pagination" layout={isActive ? 'primary' : 'link'} onClick={onClick} className='ml-2 inline-flex items-center justify-center w-8 h-8 px-1 py-0.5 rounded-sm text-base font-semibold leading-relaxed text-center text-black border-[#D4DCE7]'>
      {page}
    </Button>
  )
}

export const EmptyPageButton = () => <span className="px-2 py-1">...</span>

const Pagination = React.forwardRef(function Pagination(props, ref) {
  const { totalResults, resultsPerPage = 10, label, onChange, ...other } = props
  const [pages, setPages] = useState([])
  const [activePage, setActivePage] = useState(1)

  const TOTAL_PAGES = Math.ceil(totalResults / resultsPerPage)
  const FIRST_PAGE = 1
  const LAST_PAGE = TOTAL_PAGES
  const MAX_VISIBLE_PAGES = 7

  function handlePreviousClick() {
    setActivePage(activePage - 1)
  }

  function handleNextClick() {
    setActivePage(activePage + 1)
  }

  useEffect(() => {
    if (TOTAL_PAGES <= MAX_VISIBLE_PAGES) {
      setPages(Array.from({ length: TOTAL_PAGES }).map((_, i) => i + 1))
    } else if (activePage < 5) {
      setPages([1, 2, 3, 4, 5, '...', TOTAL_PAGES])
    } else if (activePage >= 5 && activePage < TOTAL_PAGES - 3) {
      setPages([1, '...', activePage - 1, activePage, activePage + 1, '...', TOTAL_PAGES])
    } else {
      setPages([
        1,
        '...',
        TOTAL_PAGES - 4,
        TOTAL_PAGES - 3,
        TOTAL_PAGES - 2,
        TOTAL_PAGES - 1,
        TOTAL_PAGES,
      ])
    }
  }, [activePage, TOTAL_PAGES])

  useEffect(() => {
    onChange(activePage)
  }, [activePage])

  const {
    theme: { pagination },
  } = useContext(ThemeContext)

  const baseStyle = pagination.base

  return (
    <div className={baseStyle} ref={ref} {...other}>
      {/*
       * This (label) should probably be an option, and not the default
       */}
      <span className="flex items-center font-semibold tracking-wide capitalize text-[#677A96]">
        Show {activePage * resultsPerPage - resultsPerPage + 1}-
        {Math.min(activePage * resultsPerPage, totalResults)} entry of {totalResults}
      </span>

      <div className="flex mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label={label}>
          <ul className="inline-flex items-center">
            <li>
              <NavigationButton
                directionIcon="prev"
                disabled={activePage === FIRST_PAGE}
                onClick={handlePreviousClick}
              />
            </li>
            {pages.map((p, i) => (
              <li key={p.toString() + i}>
                {p === '...' ? (
                  <EmptyPageButton />
                ) : (
                  <PageButton
                    page={p}
                    isActive={p === activePage}
                    onClick={() => setActivePage(+p)}
                  />
                )}
              </li>
            ))}
            <li>
              <NavigationButton
                directionIcon="next"
                disabled={activePage === LAST_PAGE}
                onClick={handleNextClick}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
})

export default Pagination