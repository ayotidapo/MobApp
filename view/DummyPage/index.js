import { connect } from "react-redux";
import DummyPage from "./DummyPage";
import { callLogout } from "./../LogIn/redux/auth";
const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  callLogout: navigation => dispatch(callLogout(navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyPage);
