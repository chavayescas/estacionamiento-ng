import { Component, OnInit } from '@angular/core';
import { CostoService } from 'src/app/services/costo.service';
import { Costo } from '../../code/Costo';
@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.css']
})
export class CostosComponent implements OnInit {
  costos:any[];
  constructor(private http:CostoService) { }

  ngOnInit(): void {
   this.http.getCostos().subscribe((resp:any)=>{
     console.log(resp);
    this.costos = resp;
   });
  }
  trackByIdx(index: number, obj: any): any {

    return index;
  }
  save(costo:number,minimo:string,maximo:string){
   let minimos:string[] =   minimo.split(":");
   let maximos = maximo.split(":");
   let minimoMinutos:number = Number(minimos[0])*60 + Number(minimos[1]);
   let maximoMinutos:number = Number(maximos[0])*60 + Number(maximos[1]);
    let nuevoCosto:Costo = new Costo(costo,minimoMinutos,maximoMinutos);
    this.http.send(nuevoCosto).subscribe((resp:any)=>{
      console.log(resp);
      this.costos.push(resp);
    });
  }
}
