import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'


import * as styles from '../Posts/Posts.module.scss'
import { ButtonStyle } from '../MaterialStyles'
import { reactionAddedThunk } from '../../redux/reducers/postsReducer'
import { slight_smile, heart_eyes, laughing, astonished, sob } from '../../assets/icons'

const smilesArr = {slight_smile, heart_eyes, laughing, astonished, sob}


const PostReaction = ({ marks, id }) => {
    const stylesSmileButton = ButtonStyle()
    const dispatch = useDispatch()

    const smileButtons = Object.entries(smilesArr).map(([key, value], index) => <Button key={index} className={`${styles.post_reaction_button} ${stylesSmileButton.smile} reaction-target`} onClick={e => dispatch(reactionAddedThunk(id, { name: key, number: marks[key] }))}>{value} {marks[key]}</Button>)

    return (
        <div className={styles.post_reaction}>
            {smileButtons}
        </div>
    )
}

export default PostReaction