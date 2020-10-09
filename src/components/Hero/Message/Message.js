import React from 'react';

import classes from './Message.module.css';

const Message = () => (
    <div className={classes.Message}>
        <p className={classes.bigText}>Easily book online</p>
        <p className={classes.smallText}>Discover and book beauty & wellness professionals near you</p>
    </div>
);

export default Message;