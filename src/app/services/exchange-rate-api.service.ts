import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ExRate } from '../models/ExRate'

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateAPIService {
  exRateURL:string = 'https://v6.exchangerate-api.com/v6/96f7e4f7849357c8da466dbf/pair'
  constructor(private http:HttpClient) { }

  getExchangeRate(x:any):Observable<ExRate> {
    console.log('Request sent')
    return this.http.get<ExRate>(`${this.exRateURL}/${x[0]}/${x[1]}/${x[2]}`);
  }
}
