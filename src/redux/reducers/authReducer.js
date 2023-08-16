const authState ={
    loading : false,
    error : "",
    token : "",
    role :"",
}


const authReducer = (state = authState, action) => {
    switch(action.type) {
        case "GET_LOGIN_LOAD":
        return {
            ...state,
            loading: action.isLoading,
        }

        case "GET_LOGIN_SUCCESS":
        return {
            ...state,
            token: action.payload,
            loading: action.isLoading,
            role : action.getRole
        }

        case "GET_LOGIN_FAILED":
        return {
            ...state,
            error: action.payload,
            loading: action.isLoading
        }
    
        default:
            return state
    }
}

export default authReducer
