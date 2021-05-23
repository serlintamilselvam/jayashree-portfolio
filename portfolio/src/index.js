import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import { throttle } from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';


//REDUCER
import allReducers from './Reducers'

// Localstorage State
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './Helpers/LocalStorageService'
const persistedState = loadStateFromLocalStorage()

//STORE -> GLOBAL STATE
const store = createStore(
  allReducers,
  persistedState
)

// Subscribing store to local storage
store.subscribe(throttle(() => {
  saveStateToLocalStorage(store.getState())
}, 1000))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.register();