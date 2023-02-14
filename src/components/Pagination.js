import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const Pagination = ({ bookmarksPerPage, totalBookmarks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBookmarks / bookmarksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ListGroup horizontal className="mt-3">
      {pageNumbers.map((number) => (
        <ListGroup.Item key={number} onClick={() => paginate(number)}>
          <Button variant="outline-info">{number} </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Pagination;
