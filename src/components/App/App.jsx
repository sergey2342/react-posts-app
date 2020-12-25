/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
import { useLocation, useHistory, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ThemeButton from '../ThemeButton/ThemeButton'
import Content from '../Content/Content'
import * as styles from './App.module.scss'



const App = () => {
    const location = useLocation()
    const history = useHistory()
    const auth = useSelector(state => state.auth.isAuth)
    const theme = localStorage.getItem('theme')

    console.log('app render')

    useEffect(() => {
        if(!theme) {
            localStorage.setItem('theme', 'light')
        } else {
            document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
        }
    }, [])

    useEffect(() => {
        if(!auth)  history.push('login')
    })


    if(location.pathname === '/' && auth) {
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