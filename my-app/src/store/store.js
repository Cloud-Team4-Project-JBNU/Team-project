/*eslint-disable*/
import {configureStore, createSlice} from '@reduxjs/toolkit';

//로그인 관련 state들
const userLogin = createSlice({
  name : 'userLogin',
  initialState: {
    name: "",
    id: "",
    isLogin: null,
  },
  reducers : {
    loginUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.isLogin = true;
    },
    clearUser: (state, action) => {
      state.name = "";
      state.id = "";
      state.isLogin = false;
    },
  },
});
export const { loginUser, clearUser} = userLogin.actions;

const preloadedState = {
  userLogin: {
    ...userLogin.initialState,
    ...(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}),
  }
};

const store = configureStore({
  reducer: {
    userLogin : userLogin.reducer,
  },
  preloadedState,
});


export const loginUserThunk = (userInfo) => (dispatch) => {
  dispatch(loginUser(userInfo));
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export const clearUserThunk = () => (dispatch) => {
  dispatch(clearUser());
  localStorage.removeItem('userInfo');
};

export default store;

