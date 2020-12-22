import { postsApi } from '../../services/api'
import { reset } from 'redux-form'

export const GET_POSTS = 'GET_POSTS'
export const GET_SINGLE_POST = 'GET_SINGLE_POST'
export const REACTION_ADDED = 'REACTION_ADDED'
export const REACTION_ADDED_ERROR = 'REACTION_ADDED_ERROR'
export const POST_ADDED = 'POST_ADDED'


const initialState = {
    loading: false,
    error: null,
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
                const posts = Object.entries(action.payload).map(([key, value]) => {
                return { id: key, ...value }
            })
            return {
                ...state,
                loading: false,
                error: null,
                posts: posts
            }
        case GET_SINGLE_POST:
            return {
                ...state,
                loading: false,
                error: null,
                posts: [action.payload]
            }
        case REACTION_ADDED:
            const reactionAdd = state.posts.map(item => {
                if(item.id === action.payload.id) {
                  item.marks[action.payload.target.name]++
                }
                return item
            })
            return {
                ...state,
                loading: false,
                error: null,
                posts: reactionAdd
            }
        case REACTION_ADDED_ERROR:
            const reactionRemove = state.posts.map(item => {
                if(item.id === action.payload.id) {
                  item.marks[action.payload.target.name]--
                }
                return item
            })
            return {
                ...state,
                loading: false,
                error: null,
                posts: reactionRemove
            }
        case POST_ADDED:
            return {
                ...state,
                loading: false,
                error: null,
                posts: [...state.posts, action.payload]
            }
        default: 
            return state
    }
}

export default postsReducer


export const getPostsThunk = dispatch => {
    postsApi.getPosts()
        .then(({ data }) => dispatch({ type: GET_POSTS, payload: data }))
}

export const getSinglePostThunk = id => dispatch => {
    postsApi.getSinglePost(id)
        .then(({ data }) => data && dispatch({ type: GET_SINGLE_POST, payload: {id: id, ...data}}))
}

export const reactionAddedThunk = (id, target) => dispatch => {
    dispatch({ type: REACTION_ADDED, payload: {id, target}})
    postsApi.reactionAdded(id, target)
        .catch(() => dispatch({ type: REACTION_ADDED_ERROR, payload: {id, target}}))
}

export const PostAddedThunk = formData => dispatch => {
    postsApi.postAdded(formData)
        .then(({ data }) => {
            dispatch({ type: POST_ADDED, payload: {...formData, id: data.name} })
            dispatch(reset('add-post'))
        })
}