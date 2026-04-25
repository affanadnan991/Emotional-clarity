'use client'

import { Toaster } from 'sonner'

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      richColors
      closeButton
      theme="dark"
      toastOptions={{
        style: {
          fontSize: '14px',
          borderRadius: '12px',
          padding: '16px',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(160,170,210,0.2)',
        },
      }}
    />
  )
}
