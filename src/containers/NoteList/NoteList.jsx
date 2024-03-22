import { TextCard } from "components/TextCard/TextCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function NoteList() {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();

  return (
    <div className="row justify-content-start">
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            subtitle={note.created_at}
            content={note.content}
            onClickTrash={() => alert("onclick trash")}
            onClickCard={() => navigate("note/" + note.id)}
          />
        </div>
      ))}
    </div>
  );
}
