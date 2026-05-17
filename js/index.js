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

function formatData(date){
  if (!date) return '—';
  const [y, m, d] = date.split('-');
  const data = new Date(+y, +m - 1, +d);
  return data.toLocaleDateString('ca-ES', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderTasca(tasca){
  const tascaElement = document.createElement('div');
  tascaElement.classList.add('tasca-card');
  if (tasca.realitzada) tascaElement.classList.add('tasca-card--feta');
  tascaElement.dataset.id = tasca.id;

  const colorDot = `<span class="cat-dot" style="background:${tasca.categoria?.color || '#ccc'}" title="${tasca.categoria?.nom || ''}"></span>`;
  const catNom = tasca.categoria?.nom || '—';

  tascaElement.innerHTML = `
    <div class="tasca-header">
      <label class="tasca-check-wrap" title="${tasca.realitzada ? 'Marcar com a pendent' : 'Marcar com a feta'}">
        <input type="checkbox" class="tasca-check" ${tasca.realitzada ? 'checked' : ''}>
        <span class="tasca-titol ${tasca.realitzada ? 'realitzada' : ''}">${tasca.titol}</span>
      </label>
      <span class="prioritat-badge ${prioritatClass(tasca.prioritat)}">
        ${prioritatIcon(tasca.prioritat)} ${tasca.prioritat}
      </span>
    </div>
    <p class="tasca-desc">${tasca.descripcio}</p>
    <div class="tasca-meta">
      <span class="tasca-cat">${colorDot}${catNom}</span>
      <span class="tasca-data">${formatData(tasca.data)}</span>
      <button class="btn-eliminar" data-id="${tasca.id}" title="Eliminar tasca">ELIMINAR</button>
    </div>
  `;
  tascaElement.querySelector('.tasca-check').addEventListener('change', e => {
    marcarRealitzada(tasca.id, e.target.checked);
    renderTotes();
    renderGrafic();
  });
  tascaElement.querySelector('.btn-eliminar').addEventListener('click', () => {
    if (confirm(`Eliminar la tasca "${tasca.titol}"?`)) {
      eliminarTasca(tasca.id);
      renderTotes();
      renderGrafic();
      mostrarToast(`Tasca "${tasca.titol}" eliminada.`, 'ok');
    }
  });

  return tascaElement;
}