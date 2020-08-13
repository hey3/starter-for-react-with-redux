import { CombinedState, Dispatch, Store, applyMiddleware, createStore } from 'redux'
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { rootSaga } from './sagas'
import { Actions } from './actions'
import { State, rootReducer } from './reducers'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

export const configureStore = (preloadedState?: State): Store<CombinedState<State>> => {
  const middlewares = [routerMiddleware(history), sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const store = createStore(rootReducer(history), preloadedState, middlewareEnhancer)
  sagaMiddleware.run(rootSaga)
  return store
}

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector
export const useDispatch: () => Dispatch<Actions> = useReduxDispatch
