import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CostoService } from 'src/app/services/costo.service';
import { IntToTimePipe } from '../../int-to-time.pipe';
import { Costo } from 'src/app/code/Costo';
@Component({
  selector: '[tr-costo]',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.css'],
  providers: [IntToTimePipe]
})
export class CostoComponent implements OnInit {
  @Input() costo:any;
  minimo:any;
  maximo:any;
  constructor(private time:IntToTimePipe,private http:CostoService) { }

  ngOnInit(): void {
    if(this.costo.minimo>=0){
      this.minimo =   this.time.transform(this.costo.minimo);
      console.log(this.minimo);
      this.maximo  = this.time.transform(this.costo.maximo);
    }

  }
update(costo:number,minimo:string,maximo:string,id:number){
  let minimos:string[] =   minimo.split(":");
  let maximos = maximo.split(":");
  let minimoMinutos:number = Number(minimos[0])*60 + Number(minimos[1]);
  let maximoMinutos:number = Number(maximos[0])*60 + Number(maximos[1]);
  let costoActualizado:Costo = new Costo(costo,minimoMinutos,maximoMinutos,id);
  this.http.update(costoActualizado).subscribe((resp)=>{
    console.log(resp);
  })
}
delete(id:number){
  this.http.delete(id).subscribe((resp)=>{
    console.log(resp);
  });
}
}
