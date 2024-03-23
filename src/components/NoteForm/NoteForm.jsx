import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ValidatorService } from "services/validator";
import { FieldError } from "components/FieldError/FieldError";

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};

export function NoteForm({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });
  const [formErrors, setFormErrors] = useState({
    title: true,
    content: true,
  });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const validate = (fieldName, fieldValue) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATOR[fieldName](fieldValue),
    });
  };

  const hasError = () => {
    for (const fieldName in formErrors) {
      if (formErrors[fieldName]) {
        return true;
      }
    }
    return false;
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && (
          <PencilFill size="20" className={s.icon} onClick={onClickEdit} />
        )}
      </div>
      <div className="col-1">
        {onClickDelete && (
          <TrashFill size="20" className={s.icon} onClick={onClickDelete} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control bg-light"
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="bg-light form-control"
        rows="5"
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitBtn = (
    <div className="text-end">
      <ButtonPrimary
        isDisabled={hasError()}
        onClick={() => onSubmit(formValues)}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <div className={`rounded-5 px-5 pt-5 pb-4 ${s.container}`}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">{isEditable ? contentInput : <pre>{note.content}</pre>}</div>
      {onSubmit && submitBtn}
    </div>
  );
}
