import { getTasquesAcabades } from './storage.js';

function agruparPerMes(tasques) {
  const comptes = {};
  tasques.forEach(tasca => {
    const mes = tasca.data ? tasca.data.slice(0, 7) : 'Desconegut';
    comptes[mes] = (comptes[mes] || 0) + 1;
  });
  const labels = Object.keys(comptes).sort();
  const valors  = labels.map(m => comptes[m]);
  return { labels, valors };
}