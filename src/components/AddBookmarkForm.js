import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addBookmark } from "../redux/bookmarksRedux";
import { validateUrl } from "../utils/validateUrl";

const AddBookmarkForm = ({
  title,
  setTitle,
  url,
  setUrl,
  errorMessage,
  setErrorMessage,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    // check if url is valid
    if (validateUrl(url)) {
      setErrorMessage("");
      dispatch(addBookmark({ title, url }));
      // reset input fields
      setTitle("");
      setUrl("");
    } else {
      setErrorMessage("Invalid URL");
    }
  };

  return (
    <Form className="w-50 mx-auto my-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <p className="text-danger">{errorMessage}</p>
      </Form.Group>
      <div className="text-center">
        <Button variant="info" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default AddBookmarkForm;
