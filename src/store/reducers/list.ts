import * as actionTypes from '../actions'
import { listType, stateType } from '../stateTypes'


const initialState: stateType = {
    lists: [],
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
        case actionTypes.UNLOAD:
            return {
                ...state,
                lists: unloadList(state.lists, action)
            }
    }
    return state;
}

export default reducer;

function unloadList(lists, action) {
    return lists.map((list: listType) => {
        if (list.listName !== action.listName)
            return list
        return {
            ...list,
            listLoaded: false
        }
    })
}

function initializeArray(array, number) {
    for (let i = 0; i < number; i++)
        array = array.concat({
            listName: '',
            listLoaded: false,
            data: []
        })
    return array;
}


function updateOrConcatArray(array: Array<any>, action) {
    let isExist = false;
    const data: listType = {
        listName: action.listName,
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
