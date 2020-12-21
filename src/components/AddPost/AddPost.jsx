import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, Button } from '@material-ui/core/'

import { InputStyle, ButtonStyle } from '../MaterialStyles'
import * as styles from './AddPost.module.scss'

const renderTextField = ({ label, input, ...custom }) =>  <TextField label={label} autoComplete="off" {...input} {...custom}/>


let AddPost = ({ handleSubmit }) => {
    const stylesInput = InputStyle()
    const stylesButton = ButtonStyle()

    return (
        <form className={styles.form} onSubmit={ handleSubmit } >
            <div className="main-title">Добавление поста</div>
            <Field name="title" className={stylesInput.root} component={renderTextField} type="text" label="Заголовок" variant="outlined" />
            <Field name="text" className={stylesInput.root} component={renderTextField} multiline label="Текст" variant="outlined" />
            <Button type="submit" className={`${stylesButton.root} ${stylesButton.outlineBlue} ${styles.error_post_button}`}>Отправить</Button>
        </form>
    )
}

AddPost = reduxForm({form: 'add-post'})(AddPost)

export default AddPost