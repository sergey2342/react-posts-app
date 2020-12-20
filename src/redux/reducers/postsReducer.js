import { postsApi } from '../../services/api'

export const GET_POSTS = 'GET_POSTS'
export const GET_SINGLE_POST = 'GET_SINGLE_POST'


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