import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { PagesService } from '../Services/pages.service';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent {
  public items:object;
  constructor(private PagesService:PagesService){
    this.PagesService.listOrders().subscribe(data=>{
      console.log(data);
      this.items = data;
    })
  }
}
