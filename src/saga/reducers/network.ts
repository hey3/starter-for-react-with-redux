import { Reducer } from 'redux'

import { Actions, Types } from '@saga/actions'

export type NetworkState = {
  isLoading: boolean
}

const defaultState: NetworkState = {
  isLoading: false,
}

export const networkReducer: Reducer<NetworkState, Actions> = (
  state: NetworkState = defaultState,
  action: Actions
) => {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, isLoading: true }
    case Types.UNLOAD:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
