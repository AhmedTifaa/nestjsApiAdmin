import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
 private token;
  constructor(private http:HttpClient,private Token:TokenService) {}
getToken()
{
  this.token=this.Token.get();
}
login(data){
  if(data.email == "admin@admin.com" && data.password == "01278733240"){
    return data;
  }else{
    return false;
  }
}

}
