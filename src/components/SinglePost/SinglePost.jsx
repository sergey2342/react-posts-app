/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import { ButtonStyle } from '../MaterialStyles'
import * as styles from './SinglePost.module.scss'
import { getSinglePostThunk } from '../../redux/reducers/postsReducer'
import TimeAgo from '../TimeAgo/TimeAgo'
import PostReaction from '../PostReaction/PostReaction'


const Post = () => {
    const { postId } = useParams()
    useSelector(state => state.posts.posts)
    const post = useSelector(state => state.posts.posts.find(post => post.id === postId))
    const dispatch = useDispatch()
    const stylesButton = ButtonStyle()


    console.log('single post render')

    if(!post) {
        dispatch(getSinglePostThunk(postId))

        return (
            <>
                <div className={styles.error_post}>Пост не найден</div>
                <Link to="/posts"><Button className={`${stylesButton.root} ${stylesButton.outlineBlue} ${styles.error_post_button}`}>На главную</Button></Link>
            </>
        )
    }

    return (
        <>
            <Link to="/posts"><Button className={`${stylesButton.root} ${stylesButton.outlineBlue} ${styles.post_button}`}>На главную</Button></Link>
            <div className={styles.single_post}>
                <div className={styles.single_post_info}>
                    <span>{post.name}, </span>
                    <TimeAgo timestamp={post.date}/>
                </div>
                <div className={styles.single_post_title}>{post.title}</div>
                <div className={styles.single_post_text}>{post.text}</div>
                <PostReaction marks={post.marks} id={post.id}/>
            </div>
        </>
    )
}

export default Post