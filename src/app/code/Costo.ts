export class Costo{
  minimo : number;
  maximo : number;
  costo : number;
  id: number;
  constructor(costo:number,minimo:number,maximo:number,id?:number){
    this.minimo = minimo;
    this.maximo = maximo;
    this.costo = costo;
    if(id!==undefined){
      this.id = id;
    }else{
      this.id = 0;
    }
  }
}
