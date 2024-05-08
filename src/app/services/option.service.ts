import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsModel } from '../models/options';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  apiUrl="https://localhost:44305/Options"

  constructor(private httpClient:HttpClient) { }

  getOption():Observable<OptionsModel[]>{
    
    return this.httpClient.get<OptionsModel[]>(this.apiUrl);
  }
}
