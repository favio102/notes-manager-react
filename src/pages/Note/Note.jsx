import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

export function Note(props) {
  const { noteId } = useParams();
  // console.log(noteId);
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id === noteId)
  );

  const [isEditable, setIsEditable] = useState(false);

  const submit = () => {
    alert("submit");
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
