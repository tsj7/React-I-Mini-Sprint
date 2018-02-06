import React from 'react';

import Movie from './Movie';

class MovieList extends React.Component {
  state = {
    movies: [
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
    ],
    message: 'old message',
  };

  changeMessage = () => {
    this.setState({ message: 'new Message' });
  };

  render() {
    return (
      <div className="movie-list">
        <button onClick={this.changeMessage}>Change Message</button>
        <h1>{this.props.heading}</h1>
        <h2>{this.state.message}</h2>
        <ul>
          {this.state.movies.map(movie => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </ul>
      </div>
    );
  }
}

export default MovieList;


//// My first take below, Luis's solution above
// import React from 'react';
//
// const MoviesList = props => {
//   return (
//     <div>
//       <input type="text" value={props.title} onChange={props.changeHandler} />
//       <button onClick={props.addToMovies}>Submit Movie</button>
//       <ul>
//         {props.movies.map((movie, i) => {
//           return <li key={i + 1}>{movie}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };
//
// export default MoviesList;

// Import React from react.

// Create a const arrow function called MoviesList.
// Return an unordered list
// Inside the unordered list, embed a javascript expression (curly brackets).
// Inside the javascript expression, map the movies array
// The function inside map should take in two arguments, movie and i (for index).
// The function should return a list item, with a javascript expression movie (the same variable as map).
// The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.
