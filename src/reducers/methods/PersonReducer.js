import {PERSON_ADD, PERSON_DELETE} from '../../actions/index';

const initialState = {
    status: false,
    message: "",
    data: [],
    loading: false,
    error: ""
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSON_ADD:
            console.log("Person Reducer -> PERSON_ADD");
            console.log("Person Reducer -> PERSON_ADD -> " + action.payload.status);
            console.log("Person Reducer -> PERSON_ADD -> " + action.payload.message);
            return {
                ...state,
                loading: true,
                status: action.payload.status,
                message: action.payload.message
            };
        case PERSON_DELETE:
            console.log("Person Reducer -> PERSON_DELETE");
            console.log("Person Reducer -> PERSON_DELETE -> " + action.payload.status);
            console.log("Person Reducer -> PERSON_DELETE -> " + action.payload.message);
            return {
                ...state,
                loading: false,
                status: action.payload.status,
                // message: action.payload.message
            };
        default:
            return state;
    }
};

export default personReducer;