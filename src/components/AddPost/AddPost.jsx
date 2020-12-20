import React from 'react'
import TextField from '@material-ui/core/TextField';


import * as styles from './AddPost.module.scss'

const AddPost = () => {
    return (
        <div >
            <div className="main-title">Добавление поста</div>
            <TextField label="Standard"/>
        </div>
    )
}

export default AddPost