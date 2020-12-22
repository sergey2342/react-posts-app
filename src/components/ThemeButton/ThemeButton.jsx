/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { IconThemeStyle } from '../MaterialStyles'


import * as styles from './ThemeButton.module.scss'


const ThemeButton = React.memo(() => {
    const [cookies, setCookie] = useCookies(['theme'])
    const classesIconThemeStyle = IconThemeStyle()
    console.log('button render')

    useEffect(() => {
        if(cookies.theme === undefined) {
            setCookie('theme', 'light', { path: '/' })
        } else {
            document.getElementsByTagName('html')[0].setAttribute('data-theme', cookies.theme)
        }
    }, [])

    const toggleTheme = (type) => {
        setCookie('theme', type, { path: '/' })
        document.getElementsByTagName('html')[0].setAttribute('data-theme', type)      
    }


    return (
        <div className={styles.checkbox}>
            <input 
                id="button-theme" 
                type="checkbox" 
                onChange={e => e.target.checked ? toggleTheme('dark') : toggleTheme('light')} 
                checked={cookies.theme === 'dark' ? true : false} />
            <label htmlFor="button-theme">
                <div className={styles.checkbox_round}></div>
                <Brightness2Icon className={classesIconThemeStyle.root} />
                <Brightness7Icon className={classesIconThemeStyle.root} />
            </label>
        </div>
    );
})


export default ThemeButton