import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService{
  private baseUrl='http://localhost:3000';
 constructor(private http:HttpClient){}
  listOrders(){
    return this.http.get(`${this.baseUrl}/order`);
  }
}
