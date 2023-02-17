import shortid from "shortid";

//selectors
export const getAllBookmarks = (state) => state.bookmarks;

//action creators
export const addBookmark = (payload) => ({ type: "ADD_BOOKMARK", payload });
export const deleteBookmark = (payload) => ({
  type: "DELETE_BOOKMARK",
  payload,
});
export const deleteAll = (payload) => ({ type: "DELETE_ALL", payload });
export const editBookmark = (payload) => ({ type: "EDIT_BOOKMARK", payload });

//reducer
const bookmarksReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [{ ...action.payload, id: shortid() }, ...statePart,];
    case "DELETE_BOOKMARK":
      return statePart.filter((bookmark) => bookmark.id !== action.payload);
    case "DELETE_ALL":
      return statePart.filter((bookmark) => bookmark.id === action.payload);
    default:
      return statePart;
  }
};

export default bookmarksReducer;
