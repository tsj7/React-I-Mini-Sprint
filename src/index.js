import React from 'react';
import ReactDOM, { Render } from 'react-dom';

import App from './components/App';
import './index.css';

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
   title: 'Sta Wars',
 },
];

function Movie(props) {
  return <li>{prop.movie.title}</li>
}

class MoviesList extends React.Component {
  render() {
    return (
      <div className="movei-list">
        <h1>movie list component</h1>
        <ul>
          {this.props.films.map(movie => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </ul>

      </div>
    );
  }
}

// function Movie () {
//   return <div> movie component</div>;
// }
//
// // Class MoviesList extends React.Component {
//   render() {
//     return <div "movie-MoviesList">
//       <h1>movie list components </h1>
//     </div>
//     );
//   }
// }
 ReactDOM.render(<MoviesList films={movies} />, document.getElementById('root'));
render(<App />, document.getElementById('root'));
