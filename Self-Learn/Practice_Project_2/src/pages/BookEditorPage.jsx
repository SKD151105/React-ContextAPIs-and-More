import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import {
  addBook,
  selectBookById,
  updateBook,
} from "../features/books/booksSlice";

export default function BookEditorPage({ mode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookId } = useParams();
  const existingBook = useSelector((state) => selectBookById(state, bookId));

  if (mode === "edit" && !existingBook) {
    return (
      <section className="panel">
        <h2>Book not found</h2>
        <p>The selected book could not be loaded for editing.</p>
        <Link className="button-link" to="/library">
          Back to library
        </Link>
      </section>
    );
  }

  function handleSubmit(formData) {
    if (mode === "edit") {
      dispatch(
        updateBook({
          id: existingBook.id,
          changes: formData,
        }),
      );
      navigate(`/books/${existingBook.id}`);
      return;
    }

    const action = addBook(formData);
    dispatch(action);
    navigate(`/books/${action.payload.id}`);
  }

  return (
    <section className="page">
      <section className="panel">
        <div>
          <p className="eyebrow">
            {mode === "edit" ? "Update book" : "Add book"}
          </p>
          <h2>
            {mode === "edit"
              ? "Edit your library entry"
              : "Create a new library entry"}
          </h2>
          <p className="page-copy">
            Capture the essentials: title, status, progress, rating, and notes.
          </p>
        </div>

        <BookForm
          initialValues={mode === "edit" ? existingBook : null}
          onSubmit={handleSubmit}
          submitLabel={mode === "edit" ? "Save changes" : "Add book"}
        />
      </section>
    </section>
  );
}
