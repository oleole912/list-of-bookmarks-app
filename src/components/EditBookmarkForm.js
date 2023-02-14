import { Form } from "react-bootstrap";

const EditBookmarkForm = ({
  editTitle,
  setEditTitle,
  editUrl,
  setEditUrl,
  errorMessage,
}) => {
  return (
    <Form className="w-50 mx-auto my-4">
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="url"
          value={editUrl}
          onChange={(e) => setEditUrl(e.target.value)}
        />
        <p className="text-danger">{errorMessage}</p>
      </Form.Group>
    </Form>
  );
};

export default EditBookmarkForm;
