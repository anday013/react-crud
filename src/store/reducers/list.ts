import * as actionTypes from '../actions'
interface listInterface {
    listLoaded: boolean,
    data: []
}
const initialState = {
    lists: Array<listInterface>(),
    numberOfLists: 0
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADED:
            return {
                ...state,
                lists: updateOrConcatArray(state.lists, action)
            }
        case actionTypes.SET_NUMBER_OF_LISTS:
            return {
                ...state,
                lists: initializeArray(state.lists, action.numberOfLists),
                numberOfLists: action.numberOfLists
            }
    }
    return state;
}

function initializeArray(array, number) {
    for(let i = 0; i < number; i++)
        array = array.concat({
            listLoaded: false,
            data: []
        })
    return array;    
}


function updateOrConcatArray(array: Array<any>, action) {
    let isExist = false;
    const data = {
        listLoaded: true,
        data: action.data
    }
    const modifiedArray = array.map((item, index) => {
        if (index === action.id) {
            isExist = true;
            return data;
        }
        return item
    })
    if (!isExist)
        return array.concat(data)
    return modifiedArray;

}

export default reducer;