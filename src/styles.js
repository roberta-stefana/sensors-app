import { createStyles } from '@material-ui/core';

const styles = createStyles({
    container: {
        paddingTop: 130,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appbar:{
        backgroundColor: '#080807'
    },
    image:{
        width: 50,
        height: 50,
    },
    paper:{
        width: 600,
        height:500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title:{
        color: '#080807',
        paddingTop: '20px',
    },
    value:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    valueContainer: {
        width: 400,
        height: 300,
        display: 'grid'
    },
    line:{
        backgroundColor: '#568783'
    },
    button: {
        color: "#ffffff"
    },
    chartContainer:{
        display: 'grid'
    },
    chartDiv:{
        margin: '40px',
    }

});

export default styles;