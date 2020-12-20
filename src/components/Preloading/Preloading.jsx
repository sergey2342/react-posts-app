import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import * as styles from './Preloading.module.scss'
import { loadingIcon } from '../MaterialStyles'

const PreloadingPosts = ({type}) => {
    const stylesLoading = loadingIcon()


    return <div className={`${styles.preloading} ${type ? type === 'app' ? styles.preloading_app : '' : ''}`}><CircularProgress className={`${stylesLoading.root}`} /></div>
}

export default PreloadingPosts