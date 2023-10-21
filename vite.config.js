 import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react'

 // https://vitejs.dev/config/
 export default defineConfig({
  plugins: [react()],
 })


// import path from 'path'
// import { dirname } from 'path'
// import { fileURLToPath } from 'url'
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// const __dirname = dirname(fileURLToPath(import.meta.url))

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   },
//   server: {
//     proxy: {
//       '/api': 'http://localhost:3000'
//     }
//   }
// })