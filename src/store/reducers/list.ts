import * as actionTypes from '../actions'
interface listInterface {
    listLoaded: boolean,
    data: []
}
const initialState = {
    lists: Array<listInterface>()
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADED:
            return {
                lists: updateOrConcatArray(state.lists, action)
            }
        }
        return state;
}

function updateOrConcatArray(array: Array<any>, action) {
    let isExist = false;
    const data = {
        listLoaded: true,
        data: action.data
    }
    const modifiedArray = array.map((item, index) => {
        if (index === action.id)
        {
            isExist = true;
            return data;
        }
        return item
    })  
    if(!isExist)
        return array.concat(data)
    return modifiedArray;

}

export default reducer;