import React from 'react'
import { useDispatch } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { TextField, Button } from '@material-ui/core/'

import { InputStyle, ButtonStyle } from '../MaterialStyles'
import * as styles from './AddPost.module.scss'
import { PostAddedThunk } from '../../redux/reducers/postsReducer'

const renderTextField = ({ label, input, maxlength, ...custom }) =>  <TextField label={label} autoComplete="off" {...input} {...custom} required/>

let AddPostForm = ({ handleSubmit }) => {
    const stylesInput = InputStyle()
    const stylesButton = ButtonStyle()

    return (
        <form className={styles.form} onSubmit={ handleSubmit } >
            <div className="main-title">Добавление поста</div>
            <Field name="name" className={stylesInput.root} component={renderTextField} type="text" label="Автор" variant="outlined" />
            <Field name="title" className={stylesInput.root} component={renderTextField} type="text" label="Заголовок" variant="outlined" />
            <Field name="text" className={stylesInput.root} component={renderTextField} multiline label="Текст" variant="outlined" />
            <Button type="submit" className={`${stylesButton.root} ${stylesButton.outlineBlue} ${styles.error_post_button}`}>Отправить</Button>
        </form>
    )
}

const AddPost = () => {
    const dispatch = useDispatch()

    const handleSubmit = (formData) => {
        const newPost = {
            ...formData,
            date: new Date().toISOString(),
            marks: {
                slight_smile: 0, 
                heart_eyes: 0, 
                laughing: 0, 
                astonished: 0, 
                sob: 0
            }
        }
        dispatch(PostAddedThunk(newPost))
    }

    return <AddPostForm onSubmit={ handleSubmit } />
}


AddPostForm = reduxForm({form: 'add-post'})(AddPostForm)

export default AddPost