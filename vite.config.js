import { defineConfig } from 'vite';
import path from 'path';

export default () => {
  return defineConfig({
    build: {
      rollupOptions: {
        input: {
          'main': path.resolve(__dirname, 'src/index.html'),
          'amortizacion-capitalizacion': path.resolve(__dirname, 'src/pages/amortizacion-capitalizacion.html'),
          'anticipada': path.resolve(__dirname, 'src/pages/anticipada.html'),
          'anualidad-ordinaria-vencida': path.resolve(__dirname, 'src/pages/anualidad-ordinaria-vencida.html'),
          'descuentos': path.resolve(__dirname, 'src/pages/descuentos.html'),
          'intereses': path.resolve(__dirname, 'src/pages/intereses.html'),
        },
        output: {
          dir: path.resolve(__dirname, 'dist'),
        }
      }
    },
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      }
    },
    root: path.resolve(__dirname, 'src'),
  });
}