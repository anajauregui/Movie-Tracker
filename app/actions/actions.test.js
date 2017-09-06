import * as action from '../actions';
import mockMovies from './mockMovies';
import fetchMock from 'fetch-mock';

describe('movieFetchSuccess', () => {
  it('movieFetchSuccess should fetch movies', () => {
    const movies= [{
      vote_count:641,
      id:396422,
      video:false,
      vote_average:6.5,
      title:"Annabelle: Creation",
      popularity:374.244615,
      poster_path:"/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      original_language:"en",
      original_title:"Annabelle: Creation",
      backdrop_path:"/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      adult:false,
      overview:"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      release_date:"2017-08-03",
      movie_id:396422,
      isFavorite:false
    }]

    const expectedAction = {
      type: 'MOVIE_FETCH_SUCCESS',
      data: movies
    }

    expect(action.movieFetchSuccess(movies)).toEqual(expectedAction)
  })
})

describe('fetchMovieData', () => {
  it('gets the correct MovieData', () => {
    fetchMock.get('https://api.themoviedb.org/3/movie/now_playing?api_key=2e3e042d41662d924dd805ae004b2106&language=en-US&page=1', {
      status: 200,
      body: mockMovies
    })

    expect(fetchMock.routes[0].method).toEqual('GET');
    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].response.body).toEqual(mockMovies)
  })
})

describe('loginSuccess', () => {
  it('loginSuccess should return a user, isLoggedIn, id', () => {
    const user= {email: 'troll59910@aol.com', password: 'password'}

    const loginSuccess = {
      type: 'LOGIN_SUCCESS',
      user: user,
      isLoggedIn: true,
      id: 5,
    }

    expect(action.loginSuccess(user, true, 5)).toEqual(loginSuccess)
  })
})

describe('loginError', () => {
  it('loginError should return an error', () => {
    const loginError = {
      type: 'LOGIN_ERROR',
      hasErrored: true
    }

    expect(action.loginError(true)).toEqual(loginError)
  })
})

describe('logout', () => {
  it('logout should return user and isLoggedIn', () => {
    const resetUser = {email: '', password: ''}
    const logout = {
      type: 'LOGOUT',
      user: resetUser,
      isLoggedIn: false
    }

    expect(action.logout(resetUser, false)).toEqual(logout)
  })
})

describe('loginSubmit', () => {
  it('should login a user', () => {
    fetchMock.post('http://localhost:3000/api/users', {
      method: 'POST',
      body: {'email': 'troll59910@aol.com', 'password': 'password'}
    })

    expect(fetchMock.routes[0].method).toEqual('GET');
    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].response.body).toEqual({})
  })
})

describe('createNewUser', () => {
  it('createNewUser should return newUser, isNewAccount, id, error', () => {
    const createNewUser = {
      type: 'CREATE_NEW_USER',
      newUser: true,
      isNewAccount: 'success',
      id: 3,
      error: false
    }

    expect(action.createNewUser(true, 'success', 3, false)).toEqual(createNewUser)
  })
})

describe('createdNewUser', () => {
  it('should create a new user', () => {
    fetchMock.post('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: {'email': 'troll59910@aol.com', 'password': 'password'}
    })

    expect(fetchMock.routes[0].method).toEqual('GET');
    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].response.body).toEqual({})
  })
})

describe('addFavorite', () => {
  it('addFavorite should return a favorite', () => {
    const movie = {
      vote_count:641,
      id:396422,
      video:false,
      vote_average:6.5,
      title:"Annabelle: Creation",
      popularity:374.244615,
      poster_path:"/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      original_language:"en",
      original_title:"Annabelle: Creation",
      backdrop_path:"/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      adult:false,
      overview:"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      release_date:"2017-08-03",
      movie_id:396422,
      isFavorite:false
    }

    const expectedAction = {
      type: 'ADD_FAVORITE',
      movie: movie
    }

    expect(action.addFavorite(movie)).toEqual(expectedAction)
  })
})

describe('createFavorite', () => {
  it('should create a new favorite', () => {
    const movie = {
      vote_count:641,
      id:396422,
      video:false,
      vote_average:6.5,
      title:"Annabelle: Creation",
      popularity:374.244615,
      poster_path:"/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      original_language:"en",
      original_title:"Annabelle: Creation",
      backdrop_path:"/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      adult:false,
      overview:"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      release_date:"2017-08-03",
      movie_id:396422,
      isFavorite:false
    }

    fetchMock.post('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movie)
    })

    expect(fetchMock.routes[0].method).toEqual('GET');
    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].response.body).toEqual({})
  })
})

describe('userFavorites', () => {
  it('userFavorites should return user favorites', () => {
    const favorites= [{
      vote_count:641,
      id:396422,
      video:false,
      vote_average:6.5,
      title:"Annabelle: Creation",
      popularity:374.244615,
      poster_path:"/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      original_language:"en",
      original_title:"Annabelle: Creation",
      backdrop_path:"/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      adult:false,
      overview:"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      release_date:"2017-08-03",
      movie_id:396422,
      isFavorite:false
    }]

    const expectedAction = {
      type: 'USER_FAVORITES',
      array: favorites
    }

    expect(action.userFavorites(favorites)).toEqual(expectedAction)
  })
})

describe('getUserFavorites', () => {
  it('should get user favorites', () => {
    fetchMock.get('`http://localhost:3000/api/users/3/favorites`', {
      method: 'POST',
      body: mockMovies
    })

    expect(fetchMock.routes[0].method).toEqual('GET');
    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].response.body).toEqual(mockMovies)
  })
})

describe('deleteFavorite', () => {
  it('deleteFavorite should delete a favorite', () => {
    const deleteFavorite = {
      type: 'DELETE_FAVORITE',
      movieId: 338423
    }

    expect(action.deleteFavorite(338423)).toEqual(deleteFavorite)
  })
})

describe('deleteUserFavorite', () => {
  it('should delete a user favorite', () => {
    fetchMock.delete(`http://localhost:3000/api/users/3/favorites/458156`, {
      method: 'DELETE',
      body: JSON.stringify([3, 458156])
    })

    expect(fetchMock.routes[0].method).toEqual('GET');
    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].response.body).toEqual({})
  })
})
