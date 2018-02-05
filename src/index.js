import React from 'react';
import ReactDOM, { Render } from 'react-dom';

import App from './components/App';
// import './index.css';

const movies = [
 {
   id: 1,
   title: 'The Lord of The Rings',
 },
 {
   id: 2,
   title: 'The Hobbit',
 },
 {
   id: 3,
   title: 'Star Wars',
 },
];

function Movie(props) {
  return <li>{prop.movie.title}</li>
}



function Movie(props) {
  return <li>{props.movie.title}</li>;
}

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        <h1>Movies List Component</h1>
        <ul>
          {this.props.films.map(movie => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(<MovieList films={movies} heading="List of Movies" />, document.getElementById('root'));
