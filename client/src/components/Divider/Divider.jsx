import React from 'react'
import useStyles from './styles'

const Divider = ({ name }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.border} />
                <span className={classes.content}>
                    {name}
                </span>
            <div className={classes.border} />
        </div>
    )
}

export default Divider
