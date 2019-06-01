import { hot } from 'react-hot-loader';
import React from 'react';
// import PropTypes from 'prop-types';

// import { fetchLocations } from '../helpers/api';

class App extends React.Component {
  // componentDidMount() {
  //   fetchLocations()
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // }

  render() {
    return <h1>Locations Map Exercise!</h1>;
  }
}

export default hot(module)(App);
