import {getCategories, afegirCategoria, eliminarCategoria} from './storage.js';
import { Categoria } from './models.js';

function prioritatClass(prioritat) {
  const mapa = {
    'Alta': 'prioritat-alta',
    'Mitjana': 'prioritat-mitjana',
    'Baixa': 'prioritat-baixa',
  };
  return mapa[prioritat] || '';
}