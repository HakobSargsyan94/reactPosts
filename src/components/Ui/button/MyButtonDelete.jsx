import React from 'react';
import classes from "./MyButton.module.css";

const MyButtonDelete = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myDangerBtn}>
            {children}
        </button>
    );
};

export default MyButtonDelete;