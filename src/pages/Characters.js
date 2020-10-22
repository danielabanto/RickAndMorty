import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import Character from '../components/Character'
import * as characterActions from '../actions/characterActions'
  
const Characters = (props) => {
    useEffect(() => {
      if (!props.characters.length){
        props.traerTodos()
      }
    },[])
    return (
      // <h1>hola mundo</h1>
      <Character 
        characters={props.characters} 
        cargando={props.cargando}
        error={props.error} 
      />
    );
  }

  const mapStateToProps = (reducers) => {
    return reducers.characterReducer
  }
  const mapDispatchToProps = {
    ...characterActions
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Characters);