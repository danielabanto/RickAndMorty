import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import Character from '../components/Character'
import * as characterActions from '../actions/characterActions'
  
const Characters = (props) => {
    useEffect(() => {
      props.traerTodos()
    },[])
    // console.log(props)
    if (props.error) {
      return `Error: ${props.error.message}`;
    }
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