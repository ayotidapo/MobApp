import { AuthAxios } from "./../../../utils/asyncAxios";
import { AsyncStorage } from "react-native";
const SIGNUP_LOAD = "views/SIGNUP/SIGNUP_LOAD";
const SIGNUP_SUCCESS = "views/SIGNUP/SIGNUP_SUCCESS";
const SIGNUP_FAIL = "views/SIGNUP/SIGNUP_FAIL";

const LOGIN_LOAD = "views/SIGNUP/LOGIN_LOAD";
const LOGIN_SUCCESS = "views/SIGNUP/LOGIN_SUCCESS";
const LOGIN_FAIL = "views/SIGNUP/LOGIN_FAIL";
const LOGOUT = "views/SIGNUP/LOGOUT";

const initialState = { loading: false, reg: false };
const API_KEY = "AIzaSyCuhP_u2HVW37NkpuRIwSprrC0zVVoXbBA";
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOAD:
      return { ...state, loading: true, reg: "l" };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        data: { ...action.result },
        reg: "y"
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        reg: "f",
        data: {},
        error: { ...action.error }
      };
    case LOGIN_LOAD:
      return { ...state, loading: true, log: "l" };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.result },
        error: {},
        log: "y"
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        log: "f",
        data: {},
        error: { ...action.error }
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export function callSignup(body) {
  return async function(dispatch, getState) {
    try {
      dispatch({ type: SIGNUP_LOAD });
      const response = await AuthAxios.post(
        `/signupNewUser?key=${API_KEY}`,
        body
      );
      dispatch(successSignup(response));
    } catch (e) {
      dispatch({ type: SIGNUP_FAIL, error: e });
      console.log("Error!", e);
    }
  };
}
function successSignup(result) {
  return {
    type: SIGNUP_SUCCESS,
    result
  };
}

export function callLogin(body, navigation) {
  return async function(dispatch, getState) {
    try {
      dispatch({ type: LOGIN_LOAD });
      const response = await AuthAxios.post(
        `/verifyPassword?key=${API_KEY}`,
        body
      );

      AsyncStorage.setItem("token", response.data.idToken);
      dispatch(successLogin(response));
      navigation.navigate("DummyPage");
    } catch (e) {
      dispatch({ type: LOGIN_FAIL, error: e });
      console.log("Error!", e);
    }
  };
}

export function callLogout(navigation) {
  return async function(dispatch, getState) {
    try {
      const response = await AsyncStorage.removeItem("token");
      dispatch(logout());
      navigation.navigate("Login");
    } catch (e) {
      console.log("Error!", e);
    }
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

function successLogin(result) {
  return {
    type: LOGIN_SUCCESS,
    result
  };
}
// export const fetchBusinessSettings = uniqueID => {
//   return async function(dispatch) {
//     const response = await axios.get(
//       environ.http +
//         "/user/fetch/business/" +
//         uniqueID +
//         "?api_token=" +
//         environ.token
//     );
//     dispatch({ type: FETCH_BUSINESS_SETTINGS, payload: response });
//   };
// };
