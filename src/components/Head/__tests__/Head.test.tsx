import { render, waitFor } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Head } from '../Head'
import { AppProvider } from '@/providers/app'

test('should add proper page title and meta description', async () => {
  const title = 'Hello World'
  const titleSuffix = ' | Bulletproof React'
  const description = 'This is a description'

  render(<Head title={title} description={description} />, {
    wrapper: AppProvider,
  })
  await waitFor(() => expect(document.title).toEqual(title + titleSuffix))

  const metaDescription = document.querySelector('meta[name="description"]')

  expect(metaDescription?.getAttribute('content')).toEqual(description)
})
