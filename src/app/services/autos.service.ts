import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {ServerData} from '../code/ServerData';
@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }
  getAll(){
    var url:String =  ServerData.getUrl("autos");
   return this.http.get(`${url}`);
  }
  getAllByDate(date:String){
    var url:String =  ServerData.getUrl(`autos/${date}`);
    return this.http.get(`${url}`);
  }
}
