// Action Types
export const SET_USERNAME = 'workshop/github/SET_USERNAME';

// Reducer
const initialState = {
    username: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload.username
            };
        default:
            return state;
    }
}

// Action Creators
export function setUsername(username) {
    return {
        type: SET_USERNAME,
        payload: {
            username
        }
    };
}