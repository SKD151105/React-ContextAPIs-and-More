import { useEffect, useState } from "react";

const defaultFormState = {
  title: "",
  author: "",
  category: "Programming",
  description: "",
  notes: "",
  pageCount: 250,
  progress: 0,
  status: "planned",
  rating: 0,
  isFavorite: false,
};

function getInitialFormState(initialValues) {
  return initialValues
    ? {
        title: initialValues.title,
        author: initialValues.author,
        category: initialValues.category,
        description: initialValues.description,
        notes: initialValues.notes,
        pageCount: initialValues.pageCount,
        progress: initialValues.progress,
        status: initialValues.status,
        rating: initialValues.rating,
        isFavorite: initialValues.isFavorite,
      }
    : defaultFormState;
}

export default function BookForm({
  initialValues,
  onSubmit,
  submitLabel,
}) {
  const [formData, setFormData] = useState(getInitialFormState(initialValues));

  useEffect(() => {
    setFormData(getInitialFormState(initialValues));
  }, [initialValues]);

  const isFormValid =
    formData.title.trim() &&
    formData.author.trim() &&
    formData.category.trim() &&
    formData.description.trim();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const nextValue = type === "checkbox" ? checked : value;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: nextValue,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    onSubmit({
      ...formData,
      pageCount: Number(formData.pageCount),
      progress: Number(formData.progress),
      rating: Number(formData.rating),
    });
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Title</span>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            value={formData.title}
          />
        </label>

        <label className="field">
          <span>Author</span>
          <input
            name="author"
            onChange={handleChange}
            type="text"
            value={formData.author}
          />
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>Category</span>
          <input
            name="category"
            onChange={handleChange}
            type="text"
            value={formData.category}
          />
        </label>

        <label className="field">
          <span>Pages</span>
          <input
            min="1"
            name="pageCount"
            onChange={handleChange}
            type="number"
            value={formData.pageCount}
          />
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>Status</span>
          <select name="status" onChange={handleChange} value={formData.status}>
            <option value="planned">planned</option>
            <option value="reading">reading</option>
            <option value="completed">completed</option>
          </select>
        </label>

        <label className="field">
          <span>Progress</span>
          <input
            max="100"
            min="0"
            name="progress"
            onChange={handleChange}
            type="number"
            value={formData.progress}
          />
        </label>

        <label className="field">
          <span>Rating</span>
          <select name="rating" onChange={handleChange} value={formData.rating}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>

      <label className="field">
        <span>Description</span>
        <textarea
          name="description"
          onChange={handleChange}
          rows="4"
          value={formData.description}
        />
      </label>

      <label className="field">
        <span>Notes</span>
        <textarea
          name="notes"
          onChange={handleChange}
          rows="4"
          value={formData.notes}
        />
      </label>

      <label className="checkbox-row">
        <input
          checked={formData.isFavorite}
          name="isFavorite"
          onChange={handleChange}
          type="checkbox"
        />
        <span>Mark as favorite</span>
      </label>

      <div className="action-row">
        <button className="primary-button" disabled={!isFormValid} type="submit">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
