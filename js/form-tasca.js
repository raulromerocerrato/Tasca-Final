import { afegirTasca, getCategories, getCategoriaByNom } from './storage.js';
import { Tasca } from './models.js';

const form = document.getElementById('form-tasca');
const inputTitol = document.getElementById('titol');
const inputDescripcio = document.getElementById('descripcio');
const inputData = document.getElementById('data');
const selectCategoria = document.getElementById('categoria');
const selectPrioritat = document.getElementById('prioritat');
const btnSubmit = form?.querySelector('button[type="submit"]');

function carregarCategories(){
  const cats = getCategories();
  selectCategoria.innerHTML = '<option value="">Selecciona una categoria</option>';
  cats.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria.nom;
    option.textContent = categoria.nom;
    option.dataset.color = categoria.color;
    selectCategoria.appendChild(option);
  });
}
carregarCategories();

function validarFormulari() {
  const errors = [];
  if (!inputTitol.value.trim()) errors.push('El títol és obligatori');
  if (!inputDescripcio.value.trim()) errors.push('La descripció és obligatòria');
  if (!inputData.value) errors.push('La data és obligatòria');
  if (!selectCategoria.value) errors.push('Selecciona una categoria');
  if (!selectPrioritat.value) errors.push('Selecciona una prioritat');
  return {valid: errors.length === 0, errors};
}