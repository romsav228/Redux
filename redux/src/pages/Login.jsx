import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/user/action";
import { selectUserError, selectUserId } from "../redux/user/selectors";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const error = useSelector(selectUserError);
  const id = useSelector(selectUserId);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      navigate("/");
    }
  }, [id]);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mx-auto w-2/3">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        placeholder="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      ></input>
      {error?.message && <div className="text-red-500">{error?.message}</div>}
      <div className="flex justify-between">
        <button>Submit</button>
        <Link to="/signup" className="underline py-2">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default Login;
