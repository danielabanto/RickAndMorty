import { TRAER_TODOS, CARGANDO, ERROR} from '../types/episodeTypes'

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try{
        let page = 1
        let pages = undefined
        let dataTotal = []
        // Se extrae toda la informacion:
        do{
            const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
            const dataResponse = await response.json()
            dataTotal = [].concat(dataTotal, dataResponse.results)
            page += 1
            pages = dataResponse.info.pages
        } while( page <= pages)  
        
        //La info que viene como arreglo se pasara a Objeto:
        const newData = {}                      
        dataTotal.map((element)=>{
            newData[parseInt(element.episode.slice(1,3))] = {
                ...newData[parseInt(element.episode.slice(1,3))],
                [element.id] : {
                    ...element
                }
            }
        })
        //El objeto se guarda en el estado
        dispatch({
            type: TRAER_TODOS,
            payload: [dataTotal, newData]
        })
    }
    catch(error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}