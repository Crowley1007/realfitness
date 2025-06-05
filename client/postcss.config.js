// postcss.config.js
import tailwindcss from '@tailwindcss/postcss'; // Importe de '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer';

export default { // Use export default para ES Modules
  plugins: [
    tailwindcss, // Referencie diretamente, pois já é o plugin
    autoprefixer,
  ],
};