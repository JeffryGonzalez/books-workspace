export default eventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const { getBook } = useBooks();

    const book = await getBook(id);

    if (!book) {
        setResponseStatus(event, 404);
    }
    return book;



});