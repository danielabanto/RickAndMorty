import { TRAER_TODOS, CARGANDO, ERROR} from '../types/episodeTypes'
const INITIAL_STATE = {
    episodes: [],
    cargando: false,
    error: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {...state, episodes: action.payload, cargando: false}
        case CARGANDO:
            return {... state, cargando: true}
        case ERROR:
            return {...state, error: action.payload, cargando: false}
        default: return state
    }
}