import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    
    noteLabel: {
        fontFamily: 'Montserrat',
        fontSize: '12px',
        color: '#ababab',
    },
    
    noteInput: {
        fontFamily: 'Varela Round',
        fontSize: '14px',
    },

    noteStopLabel: {
        fontFamily: 'Montserrat',
        fontSize: '12px',
        color: '#fc9da5',
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