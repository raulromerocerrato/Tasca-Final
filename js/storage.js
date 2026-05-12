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

export function eliminarTasca(id) {
  const tasques = getTasques().filter(t => t.id !== id);
  saveTasques(tasques);
}

export function marcarRealitzada(id, estat) {
  const tasques = getTasques();
  const t = tasques.find(t => t.id === id);
  if (t) {
    t.realitzada = estat;
    saveTasques(tasques);
  }
}

export function getTasquesPendents() {
  return getTasques().filter(t => !t.realitzada);
}

export function getTasquesAcabades() {
  return getTasques().filter(t => t.realitzada);
}

export function getCategories() {
  const resposta = localStorage.getItem(KEYS.CATEGORIES);
  return JSON.parse(resposta).map(c => new Categoria(c.nom, c.color));
}

export function afegirCategoria(categoria) {
  const categories = getCategories();
  const duplicat = categories.find(c => c.nom.toLowerCase() === categoria.nom.toLowerCase());
  if (duplicat) return false;
  categories.push(categoria);
  saveCategories(categories);
  return true;
}

export function eliminarCategoria(nom) {
  const categories = getCategories().filter(c => c.nom !== nom);
  saveCategories(categories);
}

export function getCategoriaByNom(nom) {
  return getCategories().find(c => c.nom === nom);
}