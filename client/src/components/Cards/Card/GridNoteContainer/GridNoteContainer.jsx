import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core/'

const GridNoteContainer = ({ label1, value1, label2, value2, label3, value3 }) => {
    const classes = useStyles()

    return (
        <div className={classes.gridContainer}>
            <div className={classes.column1}>
                <Typography className={classes.noteLabel}>{label1}</Typography>
                <Typography className={classes.noteInput}>{value1}</Typography>
            </div>
            <div className={classes.column2}>
                <Typography className={classes.noteLabel}>{label2}</Typography>
                <Typography className={classes.noteInput}>{value2}</Typography>
            </div>
            <div className={classes.column3}>
                <Typography className={classes.noteLabel}>{label3}</Typography>
                <Typography className={classes.noteInput}>{value3}</Typography>
            </div>
        </div>
    )
}

export default GridNoteContainer
