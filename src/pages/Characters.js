import React from 'react'
import Character from '../components/Character'
  
class Characters extends React.Component {
    state = {
      page: 1,
      maxPage: undefined,
      loading: true,
      error: null,
      data : {
        results: [],
      },
    }
    componentDidMount() {
      this.fetchCharacters()
    }
    fetchCharacters = async () => {
      this.setState({ loading: true, error: null })
      try{
          const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`);
          const data = await response.json();
          this.setState({
              loading: false,
              data: {
                  info: data.info,
                  results: [].concat(this.state.data.results, data.results),
              },
              page: this.state.page + 1,
              maxPage: data.info.pages
          });
      } catch (error) {
          this.setState({
              loading: false,
              error: error,
          })
      }
    }
    render() {
        if (this.state.error) {
          return `Error: ${this.state.error.message}`;
        }
        return (
          <Character state={this.state} fetchCharacters={this.fetchCharacters}/>
        );
    }
  }
  
  export default Characters;