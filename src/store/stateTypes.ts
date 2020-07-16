import { listenerCount } from "process";

interface listInterface {
    listName: string,
    listLoaded: boolean,
    data: []
}
interface stateInterface{
    lists: Array<listInterface>,
    numberOfLists: number
}


export type listType = listInterface
export type stateType = stateInterface