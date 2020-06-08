import { History } from 'history'
import { combineReducers } from 'redux'
import { RouterState, connectRouter } from 'connected-react-router'

import { NetworkState, networkReducer } from './network'

export type State = {
  router: RouterState
  network: NetworkState
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    network: networkReducer,
  })
