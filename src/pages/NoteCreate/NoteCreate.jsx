import { NoteForm } from "components/NoteForm/NoteForm";

export function NoteCreate(props) {
  const submit = (formValues) => {
    alert(JSON.stringify(formValues))
  }
  return (
    <div className="d-flex justify-content-center">
      <NoteForm onSubmit={submit} title='New Noteeee'/>
    </div>
  );
}
