import React from 'react';
import {
    AppBar, Toolbar, Button, IconButton, makeStyles
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    headLine: {
        backgroundColor: '#111',
        fontWeight: 'bold'
    },
    customizeToolbar: {
        minHeight: 32
    },
    customizeButton: {
        color: '#fff',
        fontSize: '12px',
        fontWeight: 'bold',
        marginRight: '5px',
        '&:hover': {
            color: '#2196f3'
        },
    },
    rightIcon: {
        marginLeft: '800px'
    },
    sizeIcon: {
        color: 'yellow',
        fontSize: '11px',
        '&:hover': {
            color: '#2196f3'
        },
    }

}));


export default function Header() {
    const classes = useStyles();

    return (<div className={classes.root}>
        <AppBar position="static" className={classes.headLine}>
            <Toolbar className={classes.customizeToolbar}>
                <Button className={classes.customizeButton} size="small">Features</Button>
                <Button className={classes.customizeButton} size="small">About</Button>
                <Button className={classes.customizeButton} size="small">Contact Info</Button>
                <Button className={classes.customizeButton} size="small">Purchase Now</Button>
                <div className={classes.rightIcon}>
                    <IconButton aria-label="facebook icon">
                        <FacebookIcon className={classes.sizeIcon} />
                    </IconButton>
                    <IconButton aria-label="facebook icon">
                        <TwitterIcon className={classes.sizeIcon} />
                    </IconButton>
                    <IconButton aria-label="instagram icon">
                        <InstagramIcon className={classes.sizeIcon} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>);
}
