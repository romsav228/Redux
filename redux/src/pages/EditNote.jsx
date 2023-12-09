import { useEffect, useMemo, useState } from "react";
import { Form } from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../redux/notes/action";
import { selectUserId } from "../redux/user/selectors";
import { selectNotesData, selectNotesError } from "../redux/notes/selectors";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditNote = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const { id } = useParams();
  const notes = useSelector(selectNotesData);
  const note = useMemo(() => notes.find((x) => x.id === +id), [notes, id]);
  const error = useSelector(selectNotesError);
  const [form, setForm] = useState({
    title: note?.title,
    text: note?.text,
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (!form.title.trim()) {
      dispatch(selectNotesError(new Error("Заполните это поле")));
    }
    e.preventDefault();
    dispatch(editNote({ ...form, id, createdAt: Date.now(), userId }));
    navigate("/notes");
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div>
      <Link to="/notes" className="underline">Back</Link>
      <Form
        label={"Edit note"}
        onSubmit={handleSubmit}
        value={form}
        onChange={handleChange}
        error={error}
      />
    </div>
  );
};

export default EditNote;
