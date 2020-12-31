import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers:[DatePipe],
})
export class AutosComponent implements OnInit {
  autos:any[];
  original:any[];
  date:String;
  salida:boolean=false;
  total:number;
  constructor(private http:AutosService,private datePipe:DatePipe) {
    let date = new Date();
    this.date = datePipe.transform(date,"yyyy-MM-dd");

  }

  ngOnInit(): void {
    this.http.getAllByDate(this.date).subscribe((data:any)=>{
      console.log(data);
      this.autos = data;
      this.original = data;
      this.autos.forEach((val)=>{
        this.total +=val.total;
      });
    })
  }
  dateChange(date:String){
    this.http.getAllByDate(this.date).subscribe((data:any)=>{
      console.log(data);
      this.autos = data;
      this.original = data;
    })
  }
  conSalida(){
    this.salida = !this.salida;
    if(this.salida){
    this.autos = this.autos.filter((val)=>{
      if(val.fechaSalida){
        return val;
      }
    });
  }else{
    this.autos = this.original;
  }
  }
}
