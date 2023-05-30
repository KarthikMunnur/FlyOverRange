const initState = {
  signinError: null,
  signupError: null,
  loaded: true,
  uploadProfileStatus: false,
   
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        signinError: "Please enter correct Email or Password",
        loaded: false,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        signinError: null,
        loaded: false,
      };

    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signupError: null,
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        signupError: "Please enter correct Name/Email/Password/select checkbox",
      };
    case "SOME_ACTION":
      return {
        ...state,
        data: action.payload,
      };

    case "UPLOAD_PROFILE_SUCCESS":
      return {
        ...state,
        uploadProfileStatus: true,
      };

    default:
      return state;
  }
};

export default authReducer;
