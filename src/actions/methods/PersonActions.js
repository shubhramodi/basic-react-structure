import {PERSON_ADD, PERSON_DELETE} from '../../actions/index';

export function getPersonList(payload = {}) {

    const initialState = {
        status: true,
        message: "Request process successfully",
    };

    console.log("getPersonList");

    return (dispatch) => {
        return dispatch({
            type: PERSON_ADD,
            payload: initialState
        });
    }
}

export function getPersonListNew(payload = {}) {

    const initialState = {
        status: false,
        message: "Request process successfully",
    };

    console.log("getPersonListNew");

    return (dispatch) => {
        return dispatch({
            type: PERSON_DELETE,
            payload: initialState
        });
    }
}

/*POST(GET_PERSON_LIST_URL, payload)
            .then((response) => {
                if (!response.data.data) {
                    response.data.data = [];
                }
                dispatch({
                    type: PERSON_ADD,
                    payload: response.data
                });
            });*/