import { afegirTasca, getCategories, getCategoriaByNom } from './storage.js';
import { Tasca } from './models.js';

const form = document.getElementById('form-tasca');
const inputTitol = document.getElementById('titol');
const inputDescripcio = document.getElementById('descripcio');
const inputData = document.getElementById('data');
const selectCategoria = document.getElementById('categoria');
const selectPrioritat = document.getElementById('prioritat');
const colorPreview = document.getElementById('cat-color-preview');
const btnSubmit = form?.querySelector('button[type="submit"]');