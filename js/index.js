import {getTasques, eliminarTasca, marcarRealitzada, afegirTasca} from './storage.js';
import { Tasca } from './models.js';

const pendentsContenidor = document.querySelector('.tasques-pendents');
const acabadesContenidor = document.querySelector('.tasques-acabades-contenidor');
const inputFitxer = document.getElementById('input-fitxer');
const botoPujar = document.getElementById('btn-pujar');
const labelFitxer = document.getElementById('label-fitxer');

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