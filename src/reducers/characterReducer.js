import { TRAER_TODOS, CARGANDO, ERROR} from '../types/characterTypes'
const INITIAL_STATE = {
    characters: [],
    cargando: false,
    error: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {...state, characters: action.payload, cargando: false}
        case CARGANDO:
            return {... state, cargando: true}
        case ERROR:
            return {...state, error: action.payload, cargando: false}
        default: return state
    }
}