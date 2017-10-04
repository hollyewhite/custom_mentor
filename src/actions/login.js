export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = () => {
    return {
        type: USER_LOGIN,
        sendAuthRequest: true
    };
};

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        isLoggedIn: true,
        user
    };
}

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const userLoginFailure = (errorMessage) => {
    return {
        type: USER_LOGIN_FAILURE,
        errorMessage,
    };
}

export const authenticateUser = (loginInfo) => {
    return (dispatch) => {
        dispatch(userLogin())
        let user
        	if (loginInfo.email === 'jeff.diers@gmail.com') {
                user = {
                    name: 'Jeff',
                    status: 'mentor'
                }
				return dispatch(userLoginSuccess(user));
			} else if(loginInfo.email === 'austin@email.com') {
                user ={
                    name: 'Austin',
                    status: 'mentee'
                }
                return dispatch(userLoginSuccess(user))
            }
			return dispatch(userLoginFailure({message: "Invalid login credentials."}));
    }
}


	// 	 axios({
    //     method: 'POST',
    //     url: 'custommentor/custom_mentor/serverapi/user.php',
    //     data: "requesttype=Signin&data=" + (JSON.stringify(this.state.formValues))
    //   }).then(function (response) {
    //     //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
    //     //sample response :{"response":"success","error":"",type:"Mentee"} :redirect to signin based on response
    //     console.log(response.data);
    //   }).catch(function (error) {
    //     console.log(error);
    //   });