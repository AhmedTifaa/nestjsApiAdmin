import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  handle(data)
  {
   this.set(data);
  }

  set(data)
  {
    localStorage.setItem('apps',JSON.stringify(data));

  }

  get()
  {

    let app=JSON.parse(localStorage.getItem('apps'));
    if(app){
    return app.email;
    }

  }
  remove()
  {
    localStorage.clear();
    sessionStorage.clear();
  }
  isvaild(){
    const token =this.get();
      if(token)
      {
        return true;
      }
    return false;
  }

  LoggedIn()
  {
    return this.isvaild();
  }
}
