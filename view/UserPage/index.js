import { connect } from "react-redux";
import UserPage from "./UserPage";
import { getUsers } from "view/UserPage/redux/userpage";
const mapStateToProps = (state, ownProps) => ({
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
