import * as reducers from './reducers'

describe('Movies reducer', () => {
  it('should have a default state', () => {
    expect(reducers.movies(undefined, [])).toEqual([])
  })

  it('should give me a populated array', () => {
    const movie = {
      type: 'MOVIE_FETCH_SUCCESS',
      data: [{
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
      }]}

    expect(reducers.movies(undefined, movie).length).toEqual(1)
  })
})

describe('loginSuccess', () => {
  it('should have a default state', () => {
    const userLoginState = {
      userInfo: {email: '',
      password: ''},
      isLoggedIn: false,
      user_id: null,
    }

    expect(reducers.loginSuccess(undefined, userLoginState)).toEqual(userLoginState)
  })

  it('should give a user, login, and id', () => {
    const user = {
      type: 'LOGIN_SUCCESS',
      user: {email: 'troll59910@aol.com', password: 'password'},
      isLoggedIn: true,
      id: 5
    }

    const expectedResponse = {
      userInfo: {email: 'troll59910@aol.com', password: 'password'},
      isLoggedIn: true,
      user_id: 5
    }

    expect(reducers.loginSuccess(undefined, user)).toEqual(expectedResponse)
  })
})

describe('loginError', () => {
  it('should have a default state', () => {
    expect(reducers.loginError(undefined, false)).toEqual(false)
  })

  it('should give a user and isLoggedIn', () => {
    const loginError = {
      type: 'LOGIN_ERROR',
      user: {email: 'troll59910@aol.com', password: 'password'},
      hasErrored: true
    }

    expect(reducers.loginError(undefined, loginError)).toEqual(true)
  })
})


describe('logout', () => {
  it('should have a default state', () => {
    const userLoginState = {
      userInfo: {email: '',
      password: ''},
      isLoggedIn: false,
      user_id: null,
    }

    expect(reducers.logout(undefined, userLoginState)).toEqual(userLoginState)
  })

  it('logout should return an object with userInfo and isLoggedIn set to false', () => {

    const logout = {
      type: 'LOGOUT',
      user: {email: '', password: ''},
      isLoggedIn: false,
    }

    const expectedResponse = {
      userInfo: {email: '', password: ''},
      isLoggedIn: false
    }

    expect(reducers.logout(undefined, logout)).toEqual(expectedResponse)
  })
})

describe('newUser', () => {
  it('should have a default state', () => {
    const newUserInitialState = {
      newUserInfo: {
        email: '',
        password: '',
        name: '',
        user_id: null,
        error: null
      },
      isNewAccount: null
    }

    expect(reducers.newUser(undefined, newUserInitialState)).toEqual(newUserInitialState)
  })

  it('should return a new object with newUserInfo, isNewAccount, user_id, and error', () => {
    const createNewUser = {
      type: 'CREATE_NEW_USER',
      newUser: {name: 'Travis', email: 'troll59910@aol.com', password: 'password'},
      isNewAccount: true,
      id: 5,
      error: false
    }

    const expectedResponse = {
      newUserInfo: {name: 'Travis', email: 'troll59910@aol.com', password: 'password'},
      isNewAccount: true,
      user_id: 5,
      error: false
    }

    expect(reducers.newUser(undefined, createNewUser)).toEqual(expectedResponse)
  })
})

describe('userFavorites', () => {
  it('should have a default state', () => {
    expect(reducers.userFavorites(undefined, [])).toEqual([])
  })

  it('should return USER_FAVORITES', () => {
    const movie = {
      type: 'USER_FAVORITES',
      array: [{
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
      }]}

      expect(reducers.userFavorites(undefined, movie)).toEqual(movie.array)
  })

  it('should add a favorite', () => {
    const movie = {
      type: 'ADD_FAVORITE',
      movie: {
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
    }

    const favMovie = Object.assign({}, movie.movie, {isFavorite: true});

    expect(reducers.userFavorites(undefined, movie)).toEqual([favMovie])

  })

  it('should delete a movie', () => {
    const deleteFavorite = {
      type: 'DELETE_FAVORITE',
      movieId: 342941
    }

    const state = [{
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
      movie_id: 342941,
      isFavorite:false
    }]

    expect(reducers.userFavorites(state, deleteFavorite)).toEqual([])
  })
})
