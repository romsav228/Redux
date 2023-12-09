import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserId } from "../redux/user/selectors";
import { selectNotesData } from "../redux/notes/selectors";
import { deleteNotes } from "../redux/notes/action";
const Notes = () => {
  const userId = useSelector(selectUserId);
  const notes = useSelector(selectNotesData);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNotes(id, userId));
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center">Notes</h1>

      <div className="underline text-2xl mx-auto">
        <Link to="add">Добавить заметку</Link>
      </div>

      <ul className="flex flex-col gap-3 mt-2">
        {notes.map((note) => (
          <li
            className="border border-black bg-slate-200 rounded-xl p-3 flex justify-between text-black items-center"
            key={note.id}
          >
            <Link className="flex-grow" to={`${note.id}`}>
              <strong className="text-lg break-all">{note.title}</strong>
              <span className="ml-2 text-xs">
                {new Date(note.createdAt).toLocaleDateString("ru-Ru", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </Link>
            <div className="text-lg">
              <Link to={`${note.id}/edit`}>✍️</Link>
              <button onClick={() => handleDelete(note.id)}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Notes;
