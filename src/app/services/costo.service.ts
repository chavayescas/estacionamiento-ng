import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {ServerData} from '../code/ServerData';
import {Costo} from '../code/Costo';
@Injectable({
  providedIn: 'root'
})
export class CostoService{

  constructor(private http: HttpClient) {
  }

  getCostos(){
    var url:String =  ServerData.getUrl("costos");
    console.log(url);
    return this.http.get(`${url}`);
  }
  send(costo:Costo){
    var url:String =  ServerData.getUrl("costo");
      console.log(costo)
      const httpOptions={
    ...costo
     }

    return this.http.post(`${url}`,httpOptions);
  }
  update(costo:Costo){
    var url:String =  ServerData.getUrl("costo");
    const httpOptions={
  ...costo
   }
   return this.http.put(`${url}/${costo.id}`,httpOptions);
  }
  delete(id:number){
    var url:String  = ServerData.getUrl("costo");

    return this.http.delete(`${url}/${id}`);
  }
}
