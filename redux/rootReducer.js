import { combineReducers } from "redux";
import { auth } from "view/LogIn/redux/auth";
import { users } from "view/UserPage/redux/userpage";
// function dummyRed(state = null, action) {
//   return state;
// }
const rootReducer = combineReducers({ auth, users });
export default rootReducer;
