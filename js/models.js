export class Categoria {
  constructor(nom, color) {
    this.nom = nom;
    this.color = color;
  }
}

export class Tasca {
  constructor({id, titol, descripcio, data, categoria, prioritat, realitzada = false }) {
    this.id = id || `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    this.titol = titol;
    this.descripcio = descripcio;
    this.data = data;
    this.categoria = categoria; 
    this.prioritat = prioritat; 
    this.realitzada = realitzada;
  }
}