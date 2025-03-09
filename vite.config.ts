import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build:{
    emptyOutDir: false,
    target:"node16",
    rollupOptions:{
      input:{
        background: "./src/background.ts",
      },
      output:{
        entryFileNames: "scripts/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    },
  }
})
