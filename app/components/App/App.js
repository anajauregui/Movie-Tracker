import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList';
import Controls from '../Controls/Controls';
import Background from '../Background/Background';

import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions/index';

class App extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     moviesData: null,
  //     errorStatus: ''
  //   }
  //
  //   this.fetchMovies = this.fetchMovies.bind(this);
  // }

  componentDidMount() {
    this.props.fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=2e3e042d41662d924dd805ae004b2106&language=en-US&page=1')
  }

  // fetchMovies(url) {
  //   fetch(url)
  //     .then(data => (this.handleErrors(data.status), data.json()))
  //     .then(data => this.setState({moviesData: data.results}))
  // }

//   handleErrors(status) {
//   if (status === 400) {
//     this.setState({ errorStatus: 'Bad Request.'})
//   } else if (status === 401) {
//     this.setState({ errorStatus: 'Login unauthorized.'})
//   } else if (status === 403) {
//     this.setState({ errorStatus: 'Access to this site is forbidden.'})
//   } else if (status === 404) {
//     this.setState({ errorStatus: 'The site you are looking for was not found.'})
//   } else if (status === 408) {
//     this.setState({ errorStatus: 'Request Time-out...'})
//   } else if (status === 410) {
//     this.setState({ errorStatus: 'The site is no longer available.'})
//   } else if (status === 429) {
//     this.setState({ errorStatus: 'Request was throttled.  Not all data was loaded.'})
//   } else if (status >= 500) {
//     this.setState({ errorStatus: "Server error... Please try again later!"})
//   }
// }

  render() {
    console.log(this.props);
    console.log("data",this.props.data.results);
    if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }



    // console.log("current-state",this.state.moviesData)
    // const { moviesData } = this.state;

      return (
        <div className='App'>
          <Background />
          <Controls />
          <MoviesList movies={this.props.data}/>
        </div>


      )

  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies,
    hasErrored: state.fetchError,
    isLoading: state.fetchLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchMovieData(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
