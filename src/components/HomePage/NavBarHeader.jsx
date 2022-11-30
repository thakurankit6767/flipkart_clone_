import React from "react";
import { Box, makeStyles, Typography } from '@material-ui/core';
import { HeadData } from '../../constant/data';


const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const NavBarHeader = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                HeadData.map((temp,index) => (
                    <Box className={classes.container} key={index}>
                        <img src={temp.url} className={classes.image} alt="" />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBarHeader;