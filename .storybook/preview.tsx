import React from 'react'

import '../src/index.css'
import { AppProvider } from '../src/providers/app'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story: Function) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
]
