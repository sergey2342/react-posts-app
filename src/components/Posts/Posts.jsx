/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getPostsThunk } from '../../redux/reducers/postsReducer'
import TimeAgo from '../TimeAgo/TimeAgo'
import AddPosts from '../AddPost/AddPost'
import Preloading from '../Preloading/Preloading'
import * as styles from './Posts.module.scss'
import Button from '@material-ui/core/Button'
import { slight_smile, heart_eyes, laughing, astonished, sob } from '../../assets/icons'
import { ButtonStyle } from '../MaterialStyles'
import { reactionAddedThunk } from '../../redux/reducers/postsReducer'

const smilesArr = {slight_smile, heart_eyes, laughing, astonished, sob}

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const history = useHistory()

    const stylesSmileButton = ButtonStyle()


    useEffect(() => {
        dispatch(getPostsThunk)
    }, [])

    console.log('posts render')

    const onClickPost = (id, e, target) => {
        if(!e.target.classList.contains('reaction-target')) {
            history.push(`posts/${id}`)
        }
    }

    return (
        <div>
            <AddPosts />
            <div className="main-title">Все посты</div>
            {
                posts && posts.length === 0
                    ? <Preloading />
                    : posts.map(post => {
                    const { id, title, text, name, date, marks } = post

                    const smileButtons = Object.entries(smilesArr).map(([key, value]) => <Button key={key} className={`${styles.post_reaction_button} ${stylesSmileButton.smile} reaction-target`} onClick={e => dispatch(reactionAddedThunk(id, { name: key, number: marks[key] }))}>{value} {marks[key]}</Button>)

                    return (
                        <div onClick={e => onClickPost(id, e)} className={styles.post} key={id}>
                            <div className={styles.post_title}>{title}</div>
                            <div className={styles.post_text}>{text.length > 130 ? `${text.substr(0, 130)}...` : text}</div>
                            <div className={styles.post_info}>
                                <span>{name}, </span>
                                <TimeAgo timestamp={date}/>
                            </div>
                            <div className={styles.post_reaction}>
                                {smileButtons}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Posts