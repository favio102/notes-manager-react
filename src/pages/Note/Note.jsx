import { NoteForm } from "components/NoteForm/NoteForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Note(props) {
  const { noteId } = useParams();
  // console.log(noteId);
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id === noteId)
  );

  return (
    <>
      {note && (
        <NoteForm
        isEditable={false}
          title={note.title}
          note={note}
          onClickDelete={() => alert("Item was deleted")}
          onClickEdit={()=>alert('edit')}
        />
      )}
    </>
  );
}
