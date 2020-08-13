import { AllEffect, ForkEffect, all } from 'redux-saga/effects'

export const rootSaga = function* root(): Generator<AllEffect<ForkEffect<void>>, void> {
  yield all([])
}
