import React, { Component } from 'react'
import Location from '../components/Location'

class Locations extends Component {
    state = {
        loading: false,
        data: {
            results: [],
        },
        error: undefined,
        page: 1,
        maxPage: undefined
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/location?page=${this.state.page}`)
            const data = await response.json()
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results)
                },
                page: this.state.page + 1,
                maxPage: data.info.pages,
            })
        }catch(error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    render() {
        if (this.state.error) (
            `Error ${this.state.error.message}`
        )
        return(
            <Location state={this.state} fetchData={this.fetchData}/>
        )
    }
}

export default Locations
