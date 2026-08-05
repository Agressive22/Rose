import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count = signal<number>(0)

  constructor(private http:HttpClient) { }

addToCart(productId: string , quantity:number) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
  });

  return this.http.post(
    'https://flower.elevateegy.com/api/v1/cart',
    {
      product: productId,
      quantity: quantity
    },
    { headers }
  );
}

getCartData(){
   const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
  });

  return this.http.get('https://flower.elevateegy.com/api/v1/cart' , {headers} )
}

deleteItem(productId:any){
const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
  });

  return this.http.delete(
    `https://flower.elevateegy.com/api/v1/cart/${productId}`,
    {headers}
  );
}

}
