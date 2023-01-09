import * as React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
<div className={classes.footerContainer}>
        <div className={classes.elementContainer}>
            <img src='../telephone.png' />
            <div className={classes.telephone}>8(962) 010 05-77</div>
        </div>
        <div className={classes.elementContainer}>
            <img src='../logo.png' />
        </div>
        <div className={classes.elementContainer}>
            <img src='../location.png' />
            <div className={classes.locationText}>Наши магазины</div>
        </div>
</div>
    )
}

export default Footer