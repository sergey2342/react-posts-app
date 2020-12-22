/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getPostsThunk } from '../../redux/reducers/postsReducer'
import TimeAgo from '../TimeAgo/TimeAgo'
import AddPosts from '../AddPost/AddPost'
import Preloading from '../Preloading/Preloading'
import * as styles from './Posts.module.scss'
import PostReaction from '../PostReaction/PostReaction'


const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const history = useHistory()


    useEffect(() => {
        dispatch(getPostsThunk)
    }, [])

    console.log('posts render')

    const onClickPost = (id, e) => {
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

                        return (
                            <div onClick={e => onClickPost(id, e)} className={styles.post} key={id}>
                                <div className={styles.post_title}>{title}</div>
                                <div className={styles.post_text}>{text.length > 130 ? `${text.substr(0, 130)}...` : text}</div>
                                <div className={styles.post_info}>
                                    <span>{name}, </span>
                                    <TimeAgo timestamp={date}/>
                                </div>
                                <PostReaction marks={marks} id={id}/>
                            </div>
                        )
                })
            }
        </div>
    )
}


export default Posts