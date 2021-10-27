import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService{
  private baseUrl='http://onmarket-nest.herokuapp.com';
 constructor(private http:HttpClient){}
  listOrders(){
    return this.http.get(`${this.baseUrl}/order`);
  }
}
