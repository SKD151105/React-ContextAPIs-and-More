import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  const obj = useOutletContext();

  return (
    <div>
      <h1>{id ? `Book ${id}` : "Book Catalog"}</h1>
      <p>{obj?.hello}</p>
      <p>
        {id
          ? `This is the Book ${id} content.`
          : "Please select a book from the list below."}
      </p>
    </div>
  );
}
