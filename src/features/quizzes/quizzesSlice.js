import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdForTopic } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuize: (state, action) => {
            const {id} = action.payload;
            state.quizzes[id] = action.payload;
        },
    },
})

export const addQuizForTopicId = (quiz) => {
    const {id, topicId} = quiz;
    return dispatch => {
        dispatch(quizzesSlice.actions.addQuize(quiz));
        dispatch(addQuizIdForTopic({topicId: topicId, quizId: id}));
    }
}

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuize } = quizzesSlice.actions;
export default quizzesSlice.reducer;