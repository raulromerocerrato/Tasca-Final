import {getCategories, afegirCategoria, eliminarCategoria} from './storage.js';
import { Categoria } from './models.js';

const inputNom = document.getElementById('input-nom-cat');
const inputColor = document.getElementById('input-color-cat');
const botoAfegir = document.getElementById('btn-afegir');
const llistaCat = document.getElementById('llista-categories');

function renderCategories() {
  const categories = getCategories();
  llistaCat.innerHTML = '';
  if (categories.length === 0) {
    llistaCat.innerHTML = '<p class="buit">No hi ha categories definides.</p>';
    return;
  }

  categories.forEach(categoria => renderCategoriaItem(categoria));
}

function renderCategoriaItem(categoria) {
  const item = document.createElement('div');
  item.classList.add('categoria-item');
  item.dataset.nom = categoria.nom;
  item.innerHTML = `
    <span class="categoria-color" style="background:${categoria.color}" title="${categoria.color}"></span>
    <span class="categoria-nom">${categoria.nom}</span>
    <span class="categoria-hex">${categoria.color}</span>
    <button class="btn-eliminar-cat" data-nom="${categoria.nom}" title="Eliminar categoria">🗑</button>
  `;
  item.querySelector('.btn-eliminar-cat').addEventListener('click', () => {
    if (confirm(`Eliminar la categoria "${categoria.nom}"?\nLes tasques que l'usen no es veuran afectades.`)) {
      eliminarCategoria(categoria.nom);
      renderCategories();
      mostrarToast(`Categoria "${categoria.nom}" eliminada.`, 'ok');
    }
  });

  llistaCat.appendChild(item);
}