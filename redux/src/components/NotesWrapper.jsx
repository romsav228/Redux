import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../redux/user/selectors";
import { setNotes } from "../redux/notes/action";
import { Outlet } from "react-router-dom";
import { selectNotesLoading } from "../redux/notes/selectors";
export const NotesWrapper = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const loading = useSelector(selectNotesLoading);
  useEffect(() => {
    dispatch(setNotes(userId));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <Outlet />;
};
