import axios from "axios";


const onLogin = (data) =>(dispatch) => {
    dispatch({
        type: "GET_LOGIN_LOAD",
        isLoading: true
    })
    axios
    .post("https://api-car-rental.binaracademy.org/customer/auth/login", data)
    .then((res) => {
        dispatch({
            type:"GET_LOGIN_SUCCESS",
            payload: res.data.access_token,
            getRole:res.data.role,
            isLoading:false
            })
        window.history.go(-1);
        })
    .catch((err) => {
        dispatch({
            type : "GET_LOGIN_FAILED",
            payload: err.response.data.message,
            isLoading: false
        }) 
    });
  };