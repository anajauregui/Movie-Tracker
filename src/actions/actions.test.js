import * as action from '../actions';

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
  it()
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

describe('deleteFavorite', () => {
  it('deleteFavorite should delete a favorite', () => {
    const deleteFavorite = {
      type: 'DELETE_FAVORITE',
      movieId: 338423
    }

    expect(action.deleteFavorite(338423)).toEqual(deleteFavorite)
  })
})
