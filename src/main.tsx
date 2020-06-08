import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import { configureStore, history } from '@saga/index'
import { ThemeProvider } from '@themes/ThemeProvider'

const GlobalStyle = createGlobalStyle`
  body {
    word-wrap: break-word;
    font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
    background-color: ${(props) => props.theme.color.BACKGROUND};
    margin: 0;
    padding: 0;
  }
`

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyle />
      <ConnectedRouter history={history} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
