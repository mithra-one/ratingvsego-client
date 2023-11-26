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

const initialState = {
  currentUser:
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  isFetching: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  // console.log("userReducer >", action);

  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
        error: null,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case SIGN_OUT_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        currentUser: null,
        isFetching: false,
        error: null,
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case UPDATE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
        error: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
