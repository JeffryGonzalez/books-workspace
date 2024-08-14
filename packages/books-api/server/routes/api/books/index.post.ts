import { BookCreate } from "~~/types/books";

export default eventHandler(async (event) => {
    const { addBook } = useBooks();
    const user = event.context.user.sub;

    const body = await readBody(event);

    const book = { ...body, owner: user } as BookCreate;

    return await addBook(book);


});