import { useSelector, useDispatch } from "react-redux";
import { addBookmark, getAllBookmarks } from "../redux/bookmarksRedux";
import { deleteBookmark } from "../redux/bookmarksRedux";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Pagination from "./Pagination";
import { Button, Modal } from "react-bootstrap";
import { deleteAll } from "../redux/bookmarksRedux";
import { validateUrl } from "../utils/validateUrl";
import EditBookmarkForm from "./EditBookmarkForm";

const BookmarksList = ({
  title,
  url,
  errorMessage,
  setErrorMessage,
}) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarksPerPage] = useState(20);
  const [show, setShow] = useState(false);
  const [editTitle, setEditTitle] = useState();
  const [editUrl, setEditUrl] = useState();
  const [id, setId] = useState();

  // close modal with edit form on button click
  const handleClose = () => setShow(false);

  // show modal with edit form on button click
  const handleShow = ({ link }) => {
    setShow(true);
    setEditTitle(link.title);
    setEditUrl(link.url);
    setId(link.id);
  };
  const handleChange = () => {
    title = editTitle;
    url = editUrl;
    // check if url is valid
    if (validateUrl(url)) {
      setErrorMessage("");
      // add edited bookmark with new id to the list of bookmarks and delete the old one
      dispatch(deleteBookmark(id));
      dispatch(addBookmark({ title, url }));
      setShow(false);
    } else {
      setErrorMessage("Invalid URL");
    }
  };

  // get all bookmarks from initial state
  const bookmarks = useSelector(getAllBookmarks);

  const indexOfLastBookmark = currentPage * bookmarksPerPage;
  const indexOfFirstBookmark = indexOfLastBookmark - bookmarksPerPage;
  // get bookmarks displayed on current page
  const visibleBookmarks = bookmarks.slice(
    indexOfFirstBookmark,
    indexOfLastBookmark
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3 className="text-dark">Movies I want to see:</h3>
        <Button
          onClick={() => dispatch(deleteAll(bookmarks.length + 1))}
          variant="outline-danger"
          size="sm"
          className="m-1"
        >
          Clear all
        </Button>
      </div>
      <ListGroup>
        {visibleBookmarks.map((link) => (
          <div key="link.id">
            <ListGroup.Item
              key={link.id}
              className="d-flex justify-content-between"
            >
              <a href={link.url}>{link.title}</a>
              <div>
                <i
                  className="fa fa-solid fa-pencil text-warning mx-3"
                  id={link.id}
                  onClick={() => handleShow({ link })}
                ></i>
                <i
                  className="fa fa-solid fa-trash text-danger mx-3"
                  onClick={() => dispatch(deleteBookmark(link.id))}
                ></i>
              </div>
            </ListGroup.Item>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <h3 className="text-center text-dark">Edit Position</h3>
                <EditBookmarkForm
                  editTitle={editTitle}
                  setEditTitle={setEditTitle}
                  editUrl={editUrl}
                  setEditUrl={setEditUrl}
                  errorMessage={errorMessage}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleChange({ link })}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </ListGroup>

      <Pagination
        paginate={paginate}
        bookmarksPerPage={bookmarksPerPage}
        totalBookmarks={bookmarks.length}
      />
    </div>
  );
};

export default BookmarksList;
