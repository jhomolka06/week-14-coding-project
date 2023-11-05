// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



//#1
// import React from 'react';
// import './App.css';
// import Movies from './Movies';

// function App() {
//   return (
//     <div className="App">
//       <Movies />
//     </div>
//   );
// }

// export default App;


//

import React from 'react';
import './App.css';
import MovieList from './MovieList'; 

function App() {
  return (
    <div className="App">
      <h1>Movie Review App</h1>
      <MovieList />
    </div>
  );
}

export default App;

