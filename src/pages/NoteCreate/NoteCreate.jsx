import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/notes/notes-slice";

export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (formValues) => {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createdNote));
    alert("The note has been created");
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center">
      <NoteForm onSubmit={submit} title="New Note" />
    </div>
  );
}

export const ProtectNoteCreate = withAuthRequired(NoteCreate);
