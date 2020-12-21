/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPostsThunk } from '../../redux/reducers/postsReducer'
import TimeAgo from '../TimeAgo/TimeAgo'
import AddPosts from '../AddPost/AddPost'
import Preloading from '../Preloading/Preloading'
import * as styles from './Posts.module.scss'


const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)


    useEffect(() => {
        dispatch(getPostsThunk)
    }, [])


    return (
        <div>
            <AddPosts />
            <div className="main-title">Все посты</div>
            {
                posts && posts.length === 0
                    ? <Preloading />
                    : posts.map(post => {
                    const { id, title, text, name, date } = post

                    return (
                        <Link to={`posts/${id}`} className={styles.post} key={id}>
                            <div className={styles.post_title}>{title}</div>
                            <div className={styles.post_text}>{text.length > 100 ? `${text.substr(0, 100)}...` : text}</div>
                            <div className={styles.post_info}>
                                <span>{name}, </span>
                                <TimeAgo timestamp={date}/>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Posts