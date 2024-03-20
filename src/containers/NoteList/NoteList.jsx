import { useSelector } from "react-redux";
import s from "./style.module.css";
import { TextCard } from "components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";

export function NoteList(props) {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div className={s.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => alert("onclick trash")}
            />
          </div>
        );
      })}
    </div>
  );
}
