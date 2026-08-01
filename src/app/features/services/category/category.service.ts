import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private  http : HttpClient){}

  getData(){
   return this.http.get('https://flower.elevateegy.com/api/v1/categories')
  }
}
