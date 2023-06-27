import { createSlice, configureStore } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    value: 0,
    token: localStorage.getItem('token') || "", // Restaurer le token depuis localStorage
    isLogged: localStorage.getItem('isLogged') === 'true' || false, // Restaurer le statut de connexion depuis localStorage
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLogged = true;
      localStorage.setItem("token", action.payload);
      localStorage.setItem("isLogged", true); // Stocker le statut de connexion dans localStorage
    },
    loginFail: (state, action) => {
      console.log(action.payload);
      state.isLogged = false;
      state.token = "";
      localStorage.removeItem("token"); // Supprimer le token de localStorage en cas d'échec de connexion
      localStorage.setItem("isLogged", false); // Stocker le statut de connexion dans localStorage
    },
    registerSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isLogged = true;
      localStorage.setItem("token", action.payload);
      localStorage.setItem("isLogged", true); // Stocker le statut de connexion dans localStorage
    },
    registerFail: (state, action) => {
      console.log(action.payload);
      state.isLogged = false;
      state.token = "";
      localStorage.removeItem("token"); // Supprimer le token de localStorage en cas d'échec d'inscription
      localStorage.setItem("isLogged", false); // Stocker le statut de connexion dans localStorage
    }
  }
})

export const { loginSuccess, loginFail, registerSuccess, registerFail } = apiSlice.actions

const store = configureStore({
  reducer: apiSlice.reducer
})

export default store
