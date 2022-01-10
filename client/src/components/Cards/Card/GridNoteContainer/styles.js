import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    
    noteLabel: {
        fontFamily: 'Montserrat',
        fontSize: '11px',
        color: '#858585',
    },
    
    noteInput: {
        fontFamily: 'Varela Round',
        fontSize: '14px',
    },

    noteStopLabel: {
        fontFamily: 'Montserrat',
        fontSize: '11px',
        color: '#e35460',
    },
    
    noteStopInput: {
        fontFamily: 'Varela Round',
        fontSize: '14px',
        color: '#ed2939',
    },

    gridContainer: {
        display: 'grid',
        gridAutoColumns: '1fr',
        gridAutoFlow: 'column',
    },
    
    column1: {
        gridColumn: 1,
    },
    
    column2: {
        gridColumn: 2,
    },
    
    column3: {
        gridColumn: 3,
    },
})