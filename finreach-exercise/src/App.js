import React, { Component } from 'react';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from './reducers'
import Main from './components/main';
import './App.css';

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate()
  )
)

persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
