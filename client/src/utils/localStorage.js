export const getSavedBookIds = () => {
  const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : []

  return savedBookIds
}

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr) {
    if (bookIdArr.length) {
      localStorage.setItem("saved_books", JSON.stringify(bookIdArr))
    } else {
      localStorage.removeItem("saved_books")
    }
  } else {
    localStorage.removeItem("saved_books")
  }
}

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : null

  if (!savedBookIds) {
    return false
  }

  const updatedSavedBookIds = savedBookIds?.filter(
    (savedBookId) => savedBookId !== bookId
  )
  localStorage.setItem("saved_books", JSON.stringify(updatedSavedBookIds))

  return true
}

// added to remove all books from local storage
// call this when user logs out as this is saved in local storage
// without reference to the user, so not deleting this can prevent new users from
// seeing the previous user's saved books
export const removeAllBooks = () => {
  localStorage.removeItem("saved_books")
}
