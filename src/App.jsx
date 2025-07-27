import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@components'
import { ModalProvider } from '@providers'

const App = () => {
  const AppProvider = ({ contexts, children }) =>
    contexts.reduce(
      (prev, context) =>
        React.createElement(context, {
          children: prev
        }),
      children
    )

  return (
    <BrowserRouter>
      <AppProvider contexts={[ModalProvider]}>
        <Router />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
