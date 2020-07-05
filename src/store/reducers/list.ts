import * as actionTypes from '../actions'
const initialState = {
    listLoaded: false,
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADED:
            return {
                ...state,
                listLoaded: true,
                data: action.data
            }
    }
    return state;
}


export default reducer;