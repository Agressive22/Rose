import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://flower.elevateegy.com/api/v1/products')
  }
  getSpecificProduct(id:any){
    return this.http.get("https://flower.elevateegy.com/api/v1/products/"+id)
  }
}
