import { TextCard } from "components/TextCard/TextCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function NoteList(props) {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();

  return (
    <div className="row justify-content-start">
      {noteList.map((note, index) => (
        <div key={note.id + index} className={s.card_container}>
          <TextCard
            title={note.title}
            subtitle={note.created_at}
            content={note.content}
            onClick={() => navigate("note/" + note.id)}
            onClickTrash={() => alert("onclick trash")}
          />
        </div>
      ))}
    </div>
  );
}
