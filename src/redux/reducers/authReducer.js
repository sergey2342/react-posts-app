export const AUTH = 'AUTH'

const initialState = {
    isAuth: true
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH:
            return {
                ...state,
                isAuth: !state.isAuth
            }
        default: 
            return state
    }
}

export default authReducer