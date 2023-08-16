import axios from "axios";


const onLogin = (data) =>(dispatch) => {
    dispatch({
        type: "GET_LOGIN_LOAD",
        isLoading: true
    })
    axios
    .post("https://api-car-rental.binaracademy.org/customer/auth/login", data)
    .then((res) => {
        localStorage.setItem("token", res.data.access_token)
        localStorage.setItem("role", res.data.role)
        dispatch({
            type:"GET_LOGIN_SUCCESS",
            payload: res.data.access_token,
            getRole:res.data.role,
            isLoading:false
            })
            setTimeout(() =>{
            window.history.go(-1);
        }, 3000)
        })
    .catch((err) => {
        dispatch({
            type : "GET_LOGIN_FAILED",
            payload: err.response.data.message,
            isLoading: false
        }) 
    });
  };


  export default onLogin