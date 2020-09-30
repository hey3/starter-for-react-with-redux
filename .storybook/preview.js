import React from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@themes/ThemeProvider'
import { configureStore } from '../src/saga'

const store = configureStore()

export const decorators = [
  Story => (
    <Provider store={store}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
]
