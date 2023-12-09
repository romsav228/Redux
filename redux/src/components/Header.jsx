import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUserData } from "../redux/user/action";
import { selectUserData } from "../redux/user/selectors";
const Header = ({ logout, user }) => {
  return (
    <header className="flex justify-between border-b border-black px-2">
      <div>Hello, {user.email}</div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="notes"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              onClick={logout}
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(setUserData(null)),
});

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
