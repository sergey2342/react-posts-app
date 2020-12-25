import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {AUTH} from '../../../redux/reducers/authReducer'

const Login = React.memo(() => {
    const auth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    console.log('login render')

    if(auth) return <Redirect to="/posts" />

    return (
        <div className="" onClick={() => dispatch({ type: AUTH })}>hello</div>
    )
})

export default Login