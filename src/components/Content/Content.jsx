import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Preloading from '../Preloading/Preloading'
import * as styles from './Content.module.scss'


const Login = React.lazy(() => import('../Auth/Login/Login'))
const Posts = React.lazy(() => import('../Posts/Posts'))
const SinglePost = React.lazy(() => import('../SinglePost/SinglePost'))


const Content = React.memo(() => {
    console.log('content render')

    return (
        <div className={styles.content}>
            <Switch>               
                <Route exact path="/login" render={() => <Suspense fallback={<Preloading />}><Login /></Suspense>}/>
                <Route exact path="/posts" render={() => <Suspense fallback={<Preloading />}><Posts /></Suspense>}/>
                <Route exact path="/posts/:postId" render={() => <Suspense fallback={<Preloading />}><SinglePost /></Suspense>}/>
            </Switch>
        </div>
    )
})


export default Content