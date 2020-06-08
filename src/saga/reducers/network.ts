import { Reducer } from 'redux'

import { ActionType, Type } from '@saga/actions/network'

export type NetworkState = {
  isLoading: boolean
}

const defaultState: NetworkState = {
  isLoading: false,
}

export const networkReducer: Reducer<NetworkState, ActionType> = (
  state: NetworkState = defaultState,
  action: ActionType
) => {
  switch (action.type) {
    case Type.LOAD:
      return { ...state, isLoading: true }
    case Type.UNLOAD:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
