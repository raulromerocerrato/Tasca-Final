export class Categoria {
  constructor(nom, color) {
    this.nom = nom;
    this.color = color;
  }
}

export class Tasca {
  constructor({titol, descripcio, data, categoria, prioritat, realitzada = false }) {
    this.titol = titol;
    this.descripcio = descripcio;
    this.data = data;
    this.categoria = categoria; 
    this.prioritat = prioritat; 
    this.realitzada = realitzada;
  }
}