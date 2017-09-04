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

describe('loginSuccess', () => {
  it('loginSuccess should pass in user, isLoggedIn, id', () => {
    const user= {email: 'troll59910@aol.com', password: 'password'}

    const loginSuccess = {
      type: 'LOGIN_SUCCESS',
      user: user,
      isLoggedIn: true,
      id: 5,
    }

    expect(action.loginSuccess(user, isLoggedIn, id)).toEqual(loginSuccess)
  })
})
