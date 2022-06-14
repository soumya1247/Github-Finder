import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Title 1', content: 'Content 1' },
    { id: 2, title: 'Title 2', content: 'Content 2' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                    }
                }
            }
        },
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postsAdded } = postsSlice.actions;

export default postsSlice.reducer