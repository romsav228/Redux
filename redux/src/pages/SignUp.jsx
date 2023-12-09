import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserError, selectUserId } from "../redux/user/selectors";
import { signupUser } from "../redux/user/action";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const error = useSelector(selectUserError);
  const id = useSelector(selectUserId);
  useEffect(() => {
    if (id) {
      navigate("/");
    }
  }, [id]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ ...form, createdAt: Date.now() }));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-2/3 mx-auto">
      <h1>Sign up</h1>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {error?.email && <div className="text-red-500">{error?.email}</div>}
      <input
        type="password"
        placeholder="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      {error?.password && <div className="text-red-500">{error?.password}</div>}
      <input
        type="password"
        placeholder="confirm password"
        name="confirmedPassword"
        value={form.confirmedPassword}
        onChange={handleChange}
      />
      {error?.confirmedPassword && (
        <div className="text-red-500">{error?.confirmedPassword}</div>
      )}
      <div className="flex justify-between">
        <button type="submit" className="">Submit</button>
        <Link to="/login" className="underline py-2">
          Login
        </Link>
      </div>

      {error?.message && <div className="text-red-500">{error?.message}</div>}
    </form>
  );
};

export default SignUp;
