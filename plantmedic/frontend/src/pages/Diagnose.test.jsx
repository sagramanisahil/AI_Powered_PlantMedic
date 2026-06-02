import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider } from '../LanguageContext'
import Diagnose from './Diagnose'

vi.mock('../api', () => ({
  getApiBase: () => 'http://localhost:8000',
  predictLeafImage: vi.fn(),
}))

// eslint-disable-next-line import/namespace
import { predictLeafImage } from '../api'

function renderDiagnose() {
  return render(
    <LanguageProvider>
      <Diagnose />
    </LanguageProvider>
  )
}

describe('Diagnose', () => {
  it('shows an error for invalid file type', async () => {
    renderDiagnose()

    const input = document.getElementById('leaf-image-input')
    expect(input).toBeTruthy()

    const bad = new File(['hello'], 'bad.txt', { type: 'text/plain' })
    fireEvent.change(input, { target: { files: [bad] } })

    expect(await screen.findByRole('alert')).toHaveTextContent(/png|jpeg/i)
  })

  it('shows an error for files larger than 10MB', async () => {
    const user = userEvent.setup()
    renderDiagnose()

    const input = document.getElementById('leaf-image-input')
    const big = new File(['x'], 'big.jpg', { type: 'image/jpeg' })
    Object.defineProperty(big, 'size', { value: 10 * 1024 * 1024 + 1 })

    await user.upload(input, big)
    expect(await screen.findByRole('alert')).toHaveTextContent(/10/i)
  })

  it('renders results after a successful prediction', async () => {
    const user = userEvent.setup()
    predictLeafImage.mockResolvedValueOnce({
      disease: 'Tomato___Late_blight',
      disease_ur: 'ٹماٹر — لیٹ بلائٹ',
      confidence: 0.86,
      treatment_en: 'Remove affected leaves.',
      treatment_ur: 'متاثرہ پتے ہٹا دیں۔',
    })

    renderDiagnose()

    const input = document.getElementById('leaf-image-input')
    const ok = new File(['x'], 'leaf.jpg', { type: 'image/jpeg' })
    await user.upload(input, ok)

    const analyze = screen.getByRole('button', { name: /analyze/i })
    await user.click(analyze)

    expect(await screen.findByText(/Tomato___Late_blight/)).toBeInTheDocument()
    expect(await screen.findByText(/86%/)).toBeInTheDocument()
  })
})

