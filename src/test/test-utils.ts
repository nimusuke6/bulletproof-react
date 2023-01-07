import { render as rtlRender } from '@testing-library/react'

import { AppProvider } from '@/providers/app'

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export const render = (ui: any) => {
  rtlRender(ui, {
    wrapper: AppProvider,
  })
}

export { waitFor } from '@testing-library/react'
