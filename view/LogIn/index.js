import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import { callLogin } from "./redux/auth";

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  callLogin: (body, navigation) => dispatch(callLogin(body, navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
