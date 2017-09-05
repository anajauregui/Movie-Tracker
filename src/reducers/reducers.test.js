import movies from '../reducers'

describe('Movies reducer', () => {
  it('should have a default state', () => {
    expect(movies(undefined, [])).toEqual({movies: []})
  })

  it('should give me a populated array', () => {
    const movie = [{
      type: 'MOVIE_FETCH_SUCCESS',
      data: {
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
      }}]

    expect(movies(undefined, movie).length).toEqual(1)
  })
})

describe('loginSuccess', () => {
  it.skip('should have a default state', () => {
    const userLoginState = {
      userInfo: {email: '',
      password: ''},
      isLoggedIn: false,
      user_id: null,
    }

    expect(reducer.loginSuccess(undefined, userLoginState)).toEqual(userLoginState)
  })

  it.skip('should give a user, login, and id', () => {
    const user = {
      type: 'LOGIN_SUCCESS',
      user: {email: 'troll59910@aol.com', password: 'password'},
      isLoggedIn: true,
      id: 5
    }

    expect(reducer.loginSuccess(undefined, user)).toEqual(user)
  })
})

describe('loginError', () => {
  it.skip('should have a default state', () => {
    expect(reducer.loginError(undefined, false)).toEqual(false)
  })

  it.skip('should give a user and isLoggedIn', () => {
    const loginError = {
      type: 'LOGIN_ERROR',
      user: {email: 'troll59910@aol.com', password: 'password'},
      hasErrored: true
    }

    expect(reducer.loginError(undefined, loginError)).toEqual(loginError)
  })
})


describe('logout', () => {
  it.skip('should have a default state', () => {
    const userLoginState = {
      userInfo: {email: '',
      password: ''},
      isLoggedIn: false,
      user_id: null,
    }

    expect(reducer.logout())
  })
})
