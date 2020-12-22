/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
import { useLocation, Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ThemeButton from '../ThemeButton/ThemeButton'
import Content from '../Content/Content'
import * as styles from './App.module.scss'



const App = () => {
    const location = useLocation()

    const [cookies, setCookie] = useCookies(['theme'])

    useEffect(() => {
        if(cookies.theme === undefined) {
            setCookie('theme', 'light', { path: '/' })
        } else {
            document.getElementsByTagName('html')[0].setAttribute('data-theme', cookies.theme)
        }
    }, [])

    if(location.pathname === '/') {
        return <Redirect to="/posts" />
    }


    return (
        <div className={styles.app}>
            <Content/>
            <ThemeButton />
        </div>
    );
}

export default App