import { Tasca, Categoria } from './models.js';

const KEYS = {
  TASQUES: 'tasques',
  CATEGORIES: 'categories',
};

/**
 * @returns {Tasca[]}
 */
export function getTasques() {
  const resposta = localStorage.getItem(KEYS.TASQUES);
  if (!resposta) return [];
  return JSON.parse(resposta).map(t => new Tasca(t));
}

/**
 * @param {Tasca[]} tasques
 */
export function saveTasques(tasques) {
  localStorage.setItem(KEYS.TASQUES, JSON.stringify(tasques));
}