import React from 'react';
import logo from './img/logo.png';
import './App.css';

function RenderizaCaracter(props){
  const { character } = props; //No se porque entre  { }

  return (
    <div 
      className="gallery" 
      style={{backgroundImage: `url(${character.image})`}}
      //No se porque doble {{ }}
    >
      <div className="gallery_text">
        {character.name}
      </div>
    </div>
    // <h1>Hola a todos</h1>
  )
}

class App extends React.Component {
  state = {
    page: 1,
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
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
        const data = await response.json();
        this.setState({
            loading: false,
            data: {
                info: data.info,
                results: [].concat(this.state.data.results, data.results),
            },
            page: this.state.page + 1,
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
        <div className="container">
            <header className="header">
            <img src={logo} alt="Rick_y_Morty"/>
            </header>
            <ul className="container_gallery">
            {this.state.data.results.map(character => (
                <li className="gallery" key={character.id}>
                <RenderizaCaracter character={character} /> 
                </li>
            ))}
            </ul>
            {this.state.loading && (
                <div className= "loader"> ... Cargando ...
                </div>
            )}

            {!this.state.loading && (
                <button onClick={() => this.fetchCharacters()}>
                    Load more
                </button>
            )}
        </div>
        );
    }
}

export default App;