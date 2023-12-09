import { useState } from "react";
import { Form } from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { addNote, setNotesError } from "../redux/notes/action";
import { selectUserId } from "../redux/user/selectors";
import { selectNotesError } from "../redux/notes/selectors";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AddNote = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const error = useSelector(selectNotesError);
  const [form, setForm] = useState({ title: "", text: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      dispatch(setNotesError(new Error("Заполните это поле")));
      return;
    }
    dispatch(addNote({ ...form, createdAt: Date.now(), userId }));
    navigate("/notes");
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div>
      <Link to=".." className="underline">
        Back
      </Link>
      <Form
        label={"Add note"}
        onSubmit={handleSubmit}
        value={form}
        onChange={handleChange}
        error={error}
      />
    </div>
  );
};

export default AddNote;
