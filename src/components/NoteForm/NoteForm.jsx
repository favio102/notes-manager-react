import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useState } from "react";

export function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill size="20" className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickDelete && <TrashFill size="20" className={s.icon} />}
      </div>
    </>
  );

  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control bg-light"
      />
    </>
  );

  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="bg-light form-control"
        rows="5"
      />
    </>
  );

  const submitBtn = (
    <>
      <div className="text-end">
        <ButtonPrimary onClick={()=> onSubmit(formValues)}>Submit</ButtonPrimary>
      </div>
    </>
  );

  return (
    <div className={`rounded-5 px-5 pt-5 pb-4 ${s.container}`}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {onSubmit && submitBtn}
    </div>
  );
}
