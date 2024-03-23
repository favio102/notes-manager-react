import { TextCard } from "components/TextCard/TextCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import s from "./style.module.css";
import { NoteAPI } from "api/note-api";
import { deleteNote } from "store/notes/notes-slice";

export function NoteList() {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function deleteNote_(note) {
    if (window.confirm("Are you sure to delete the Note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }

  return (
    <div className="row justify-content-start">
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            subtitle={note.created_at}
            content={note.content}
            onClickTrash={() => deleteNote_(note)}
            onClick={() => navigate("note/" + note.id)}
          />
        </div>
      ))}
    </div>
  );
}
