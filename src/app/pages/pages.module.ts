import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,RouterModule,
    routing

  ],
  declarations: [
    PagesComponent,
  ],
  providers:[

  ]
})
export class PagesModule { }
