import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PencilFill } from "react-bootstrap-icons";
import { NoteAPI } from "api/note-api";
import { updateNote } from "store/notes/notes-slice";

export function Note(props) {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id === noteId)
  );
  const [isEditable, setIsEditable] = useState(false);
  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  return (
    <div className="d-flex justify-content-center">
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={
            isEditable ? (
              <>Edit Note...{<PencilFill size={20} />}</>
            ) : (
              note.title
            )
          }
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={() => alert("Item was deleted")}
          onSubmit={isEditable && submit}
        />
      )}
    </div>
  );
}
