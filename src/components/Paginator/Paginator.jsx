import React, { useEffect, useState } from 'react'
import { NavButton } from './Paginator.styled'

const Paginator = ({currentPage, totalPages, onChangePage}) => {
  const [pagination, setPagination] = useState([])
  useEffect(() => {
    if (totalPages <= 5) {
      const arr = [] 
      for (let i = 1; i <= totalPages; i++) {
        arr.push(i)
      }
      setPagination(arr)
    }
    else if (currentPage === totalPages) {
      setPagination([1, '...', currentPage - 1 ,currentPage])
    }
    else if (currentPage === totalPages - 1) {
      setPagination([1, '...', currentPage - 1, currentPage, currentPage + 1])
    }
    else if (currentPage > totalPages - 2) {
      setPagination([1, '...', currentPage, currentPage + 1, currentPage + 2])
    }
    else if (currentPage > 3) {
      setPagination([1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages])
    }
    else if (currentPage === 3) {
      setPagination([1, 2, 3, 4, '...', totalPages])
    }
    else {
      setPagination([1, 2, 3, '...', totalPages])
    }
  }, [currentPage, totalPages])

  const handleDisable = (arg) => {
    return typeof(arg) === 'string'
  }

  return (
  <div> 
    {pagination.map(page => 
      <NavButton key={page} onClick={(e) => onChangePage(+e.target.innerHTML)} disabled={handleDisable(page)}>
        {page}
      </NavButton>)}
  </div>
  )
}

export default Paginator