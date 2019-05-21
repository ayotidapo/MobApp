import { Axios } from "./../../../utils/asyncAxios";
const LOAD_USERS = "views/USERS/LOAD_USERS";
const SUCCESS_USERS = "views/USERS/SUCCESS_USERS";
const FAIL_USERS = "views/USERS/FAIL_USERS";

const initialState = {
  loading: false,
  content: []
};
export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, loading: true, reg: "l" };
    case SUCCESS_USERS:
      return {
        ...state,
        ...action.result,
        loading: false
      };
    case FAIL_USERS:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export function getUsers(body) {
  return async function(dispatch, getState) {
    try {
      dispatch({ type: LOAD_USERS });
      const response = await Axios.get(`users/all.json?key=897142a0`);
      dispatch(successGetUsers(response.data));
    } catch (e) {
      dispatch({ type: FAIL_USERS, error: e });
      console.log("Error!", e);
    }
  };
}

function successGetUsers(result) {
  return {
    type: SUCCESS_USERS,
    result
  };
}

// function successLogin(result) {
//   return {
//     type: LOGIN_SUCCESS,
//     result
//   };
// }

// export function callLogin(body, navigation) {
//   return async function(dispatch, getState) {
//     try {
//       dispatch({ type: LOGIN_LOAD });
//       const response = await AuthAxios.post(
//         `/verifyPassword?key=${API_KEY}`,
//         body
//       );

//       AsyncStorage.setItem("token", response.data.idToken);
//       dispatch(successLogin(response));
//       navigation.navigate("DummyPage");
//     } catch (e) {
//       dispatch({ type: LOGIN_FAIL, error: e });
//       console.log("Error!", e);
//     }
//   };
// }

// export function callLogout(navigation) {
//   return async function(dispatch, getState) {
//     try {
//       const response = await AsyncStorage.removeItem("token");
//       dispatch(logout());
//       navigation.navigate("Login");
//     } catch (e) {
//       console.log("Error!", e);
//     }
//   };
// }

// function logout() {
//   return {
//     type: LOGOUT
//   };
// }

// // export const fetchBusinessSettings = uniqueID => {
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
