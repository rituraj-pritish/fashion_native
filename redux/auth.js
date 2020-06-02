import produce from 'immer'

import { firebase, db } from 'app/services/firebase'
// import { setAppLoading } from 'redux/app'
// import { getCartItems } from 'redux/cart'
// import { getWishlistItems } from 'redux/wishlist'

// types

const LOGOUT = 'LOGOUT'

const AUTH_REQUEST = 'AUTH_REQUEST'
const AUTH_FAILURE = 'AUTH_FAILURE'
const AUTH_SUCCESS = 'AUTH_SUCCESS'

// action creators

export const signUp = data => async dispatch => {
  dispatch({ type: AUTH_REQUEST })

  const { email, password, name, phone } = data
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)

    if (res.user.uid) {
      const userPayload = {
        name,
        phone,
        id: res.user.uid,
        email
      }

      db.collection('users').doc(res.user.uid).set(userPayload)

      dispatch({ type: AUTH_SUCCESS, payload: userPayload })
    }
  } catch (err) {
    dispatch({ type: AUTH_FAILURE, payload: err })
  }
}

export const signIn = ({ email, password }) => async dispatch => {
  dispatch({ type: AUTH_REQUEST })
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    let user
    if (res.user.uid) {
      // dispatch(getCartItems(res.user.uid))
      // dispatch(getWishlistItems(res.user.uid))
      user = await db.collection('users').doc(res.user.uid).get()
    }

    const userData = user.data()

    if (userData) {
      dispatch({ type: AUTH_SUCCESS, payload: userData })
    }
  } catch (err) {
    dispatch({ type: AUTH_FAILURE })
  }
}

export const authStateChangeHandler = () => async dispatch => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const res = await db.collection('users').doc(user.uid).get()
      // dispatch(getCartItems(user.uid))
      // dispatch(getWishlistItems(user.uid))

      const userData = res.data()

      dispatch({
        type: AUTH_SUCCESS,
        payload: userData
      })
      // dispatch(setAppLoading(false))
    } else {
      // dispatch(setAppLoading(false))
    }
  })
}

export const signOut = () => async dispatch => {
  try {
    await firebase.auth().signOut()
  } catch (err) {}
  dispatch({ type: LOGOUT })
}

//reducer

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case AUTH_REQUEST:
        draft.isLoading = true
        draft.isAuthenticated = false
        draft.user = null
        break
      case AUTH_SUCCESS:
        draft.isLoading = false
        draft.isAuthenticated = true
        draft.user = payload
        break
      case AUTH_FAILURE:
        draft.isLoading = false
        draft.isAuthenticated = false
        draft.user = null
        break
    }
  })
