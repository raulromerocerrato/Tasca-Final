import {getTasques, eliminarTasca, marcarRealitzada, afegirTasca} from './storage.js';
import { Tasca } from './models.js';

function prioritatClass(prioritat){
  const mapa = {
    'Alta': 'prioritat-alta',
    'Mitjana': 'prioritat-mitjana',
    'Baixa': 'prioritat-baixa',
  };
  return mapa[prioritat] || '';
}

function prioritatIcon(prioritat){
  return { 'Alta': '🔴', 'Mitjana': '🟡', 'Baixa': '🟢' }[prioritat] || '⚪';
}