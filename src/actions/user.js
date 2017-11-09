import axios from 'axios'

export const NEW_USER = 'NEW_USER';
export const newUser = () => {
    return {
        type: NEW_USER,
        sendAuthRequest: true
    };
};

export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const newUserSuccess = (user) => {
    return {
        type: NEW_USER_SUCCESS,
        isLoggedIn: true,
        user
    };
}

export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';
export const newUserFailure = (errorMessage) => {
    return {
        type: NEW_USER_FAILURE,
        errorMessage,
    };
}

export const createNewUser = (newUserInfo) => {
    return (dispatch) => {
        dispatch(newUser())

        axios({
            method: 'POST',
            // AWS Config
            // url: '/serverapi/user.php',
            // Development Config
            url: 'http://custom.mentor.app/serverapi/user.php',
            data: "requesttype=Signup&data=" + (JSON.stringify(newUserInfo))
        }).then(function (response) {
            //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
            //sample response :{"response":"success","error":"",type:"Mentee"} :redirect to signin based on response
            console.log(response)
            return response.data.response === 'success' ? dispatch(newUserSuccess(response)) : dispatch(newUserFailure({message: 'something went wrong :('}))
        }).catch(function (error) {
            console.log(error)
            dispatch(newUserFailure(error))
        });
    }
}