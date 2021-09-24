import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import { Dispatch } from 'redux'
import { Actions } from '@saga/actions'
import { State } from '@saga/reducers'

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector
export const useDispatch: () => Dispatch<Actions> = useReduxDispatch
