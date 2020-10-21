import React, { Component } from 'react'
import Episode from '../components/Episode'

class Episodes extends Component {
    state = {
        loading : true,
        data: {},
        error : undefined,
        page: 1,
        maxPage: undefined,
        nro_temporadas : undefined
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({
            loading: true
        })
        try{
            let dataTotal = []
            // Se extrae toda la informacion:
            do{
                const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${this.state.page}`)
                const dataResponse = await response.json()
                dataTotal = [].concat(dataTotal, dataResponse.results)
                this.setState({
                    page: this.state.page+1,
                    maxPage: dataResponse.info.pages
                })
            } while( this.state.page < this.state.maxPage+1)  
            
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

            //Numero de temporadas
            const temporadas = Math.max(...Object.keys(newData))

            //El objeto se guarda en el estado
            this.setState({
                loading: false,
                data: newData,
                nro_temporadas: temporadas
            })
        } catch(error) {
            this.setState({
                loading: false,
                error: error.message
            })
        }
    }

    render(){   
        if (this.state.error)  {
            return(<h1>{this.state.error.message}</h1>)
        }    
        return(
            <Episode 
                state = {this.state}
                fetchData = {this.fetchData}
            />
        )
    }
}

export default Episodes
