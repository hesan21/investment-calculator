import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/investment-calculator',
    plugins: [react()],
    build: {
        outDir: 'build',  // Set output directory to 'build'
        assetsDir: 'assets'
    }
})
