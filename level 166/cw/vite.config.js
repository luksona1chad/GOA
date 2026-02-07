import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { useState } from "react"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss],
})
