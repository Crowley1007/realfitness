// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// IMPORTANTE: REMOVA ESTA LINHA SE EXISTIR: import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'; // Mantenha esta importação
import tailwindcss from '@tailwindcss/postcss'; // <<< ATENÇÃO: AGORA IMPORTAMOS DE '@tailwindcss/postcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        // ATENÇÃO: Usamos a importação que veio de '@tailwindcss/postcss'
        tailwindcss(), // Chame como função, pois é o plugin PostCSS
        autoprefixer(), // Chame como função
      ],
    },
  },
});