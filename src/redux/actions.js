import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "./types";

export const SignUpStart = () => ({
  type: SIGN_UP_START,
});

export const SignUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const SignUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export const SignInStart = () => ({
  type: SIGN_IN_START,
});

export const SignInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const SignOutStart = () => ({
  type: SIGN_OUT_START,
});

export const SignOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const SignOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error,
});

export const UpdateUserStart = () => ({
  type: UPDATE_USER_START,
});

export const UpdateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const UpdateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

export const FetchStart = () => ({
  type: FETCH_START,
});

export const FetchSuccess = () => ({
  type: FETCH_SUCCESS,
});

export const FetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});
