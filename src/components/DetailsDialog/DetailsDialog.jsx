import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { Movie } from '../Movie'

const DetailsDialog = props => {
    const { movie, open, handleClose } = props
    return (
        <Dialog open={open} onClose={handleClose} maxWidth='xl'>
            <Movie movie={movie} onClose={handleClose}/>
        </Dialog>
    )
}

export default DetailsDialog