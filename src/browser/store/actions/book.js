import {
    getActiveBooks
} from '../../api/book';

export async function loadActiveBooks(state) {
    const data = await getActiveBooks();
    return {
        activeBooks:{
            data
        }
    };
}

export default store => ({
    loadActiveBooks
})