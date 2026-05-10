import { Tasca, Categoria } from './models.js';

const KEYS = {
  TASQUES: 'tasques',
  CATEGORIES: 'categories',
};

export function getTasques() {
  const resposta = localStorage.getItem(KEYS.TASQUES);
  if (!resposta) return [];
  return JSON.parse(resposta).map(t => new Tasca(t));
}

export function saveTasques(tasques) {
  localStorage.setItem(KEYS.TASQUES, JSON.stringify(tasques));
}

export function afegirTasca(tasca) {
  const tasques = getTasques();
  if (tasques.find(t => t.id === tasca.id)) return;
  tasques.push(tasca);
  saveTasques(tasques);
}