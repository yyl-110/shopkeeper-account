import React, { useState } from 'react';
import Container from './Container';
import Logo from './Logo';
import Navigation from './Navigation';
import User from './User';
import TopSearch from './Search';
import Burger from './Burger';
import styles from './index.less';

export default ({ ...props }) => {
    return (
        <div className={styles['header']}>
            <Logo />
        </div>
    );
};
