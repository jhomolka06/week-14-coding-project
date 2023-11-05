
//#1
// import React from 'react';
// import Movie from './Movie';

// const MovieList = ({ movies }) => {
//   return (
//     <div>
//       {movies.map((movie, index) => (
//         <Movie key={index} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;




//#2
import React from 'react';
import Movie from './Movie';

// movie data
const moviesData = [
  {
    id: 1,
    title: 'Crocodile Dundee',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Crocodile_Dundee_original_Australian_New_Zealand_poster.jpg',
    synopsis: 'A New York reporter named Sue Charlton heads to Australia to interview the living legend, known as "Crocodile" Dundee. When she finally finds him in the vast Australian terrain, she is so enthralled with him that she brings him back with her to New York City. In New York, Dundee is amazed by the many wonders of the city life and the interesting people there. Its a whole new way of life for the crocodile hunting adventurer.',
    rating: 4,
    reviews: [
      'Great movie!',
      'I loved it.',
    ],
  },

  // movie data
  {
    id: 2,
    title: 'Forrest Gump',
    image: 'https://play-lh.googleusercontent.com/ToGy2Cue0epHBdeRkq3dntz8on4ogI1UlKLGqMvgCptTwmpMWVkIxojwVUuvIjrMIFz2UiNjW73xcuofHQ',
    synopsis: 'The film follows several decades in the life of a slow-witted and kindhearted Alabama man named Forrest Gump (Hanks) and his experiences in the 20th-century United States.',
    rating: 3,
    reviews: [],
  },
  // movie data 
  {
    id: 3,
    title: 'Law Abiding Citizen',
    image: 'https://m.media-amazon.com/images/M/MV5BNTQ1NmZlNDktZTg0NS00ZjNhLTk5M2QtNzExNjUzY2MwMjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    synopsis: 'The film takes place in Philadelphia, telling the story of a man driven to seek justice while targeting not only his familys killer but also those who have supported a corrupt criminal justice system, intending to assassinate anyone supporting the system.',
    rating: 3,
    reviews: [],
  },
  
  
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {moviesData.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;