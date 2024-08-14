export default eventHandler(async (event) => {
    const { loadBooks } = useBooks();
    return {
        books: await loadBooks(),

    };
});
