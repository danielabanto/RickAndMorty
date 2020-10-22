import { TRAER_TODOS, CARGANDO, ERROR} from '../types/characterTypes'

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try{
        let page = 1
        let pages = undefined
        let dataTotal = []
        do {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            dataTotal = [].concat(dataTotal, data.results)
            pages = data.info.pages
            page += 1
        } while (page <= pages)
        dispatch({
            type: TRAER_TODOS,
            payload: dataTotal
        })
    }
    catch(error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}