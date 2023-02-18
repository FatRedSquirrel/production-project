import React from 'react';

import {useTheme} from "app/providers/ThemeProvider";

import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

import './styles/index.scss';

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
};

export default App;
