import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http:HttpClient) { }
baseURL ='//localhost:3000/product'
 
getmethod()
{
  return  this.http.get(this.baseURL)
 
}
}
