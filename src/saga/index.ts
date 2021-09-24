import { CombinedState, Store, applyMiddleware, createStore, PreloadedState } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { rootSaga } from './sagas'
import { State, rootReducer } from './reducers'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

export const configureStore = (
  preloadedState?: PreloadedState<State>
): Store<CombinedState<State>> => {
  const middlewares = [routerMiddleware(history), sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const store = createStore(rootReducer(history), preloadedState, middlewareEnhancer)
  sagaMiddleware.run(rootSaga)
  return store
}
