import axios from 'axios'
export default {
    getList: (url: string) => axios.get(url),
    getMany: (url: string, ids: Array<number> | Array<string>) => axios.get(url, {
        params: {
            ids: [...ids]
        }
    }),
    getOne: (url: string, id: number | string) => axios.get(url, {
        params: {
            id: id
        }
    })
}