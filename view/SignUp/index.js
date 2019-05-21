import { connect } from "react-redux";
import { callSignup } from "./../LogIn/redux/auth";
import SignupPage from "./SignupPage";

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  callSignup: body => dispatch(callSignup(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
