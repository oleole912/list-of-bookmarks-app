import AddBookmarkForm from "./AddBookmarkForm";
import BookmarksList from "./BookmarksList";
import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <h1 className="my-5 text-center text-secondary">
        My Bookmarks - Movies to see
      </h1>
      <h3 className="text-center text-dark">Add New Position</h3>
      <AddBookmarkForm
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <BookmarksList
        title={title}
        url={url}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default Home;
