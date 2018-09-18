import {
    getBooks
} from '../../api/book';

export async function loadBooks(state) {
    const books = await getBooks();
    return {
        books
    };
}

export default store => ({
    loadBooks
})