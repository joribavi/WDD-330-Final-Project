import {resolve} from 'path' 
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'  

export default defineConfig({
  root: "src", //src will be the root directory for vite
  build: {
     outDir: '../dist' ,
     rullupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      }
     }
    
  }
       
  ,

  plugins: [
    tailwindcss(),
  ]

});