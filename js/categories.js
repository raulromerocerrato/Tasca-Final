import {getCategories, afegirCategoria, eliminarCategoria} from './storage.js';
import { Categoria } from './models.js';

const inputNom = document.getElementById('input-nom-cat');
const inputColor = document.getElementById('input-color-cat');
const botoAfegir = document.getElementById('btn-afegir');
const llistaCat = document.getElementById('llista-categories');