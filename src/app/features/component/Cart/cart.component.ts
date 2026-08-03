import { Component } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
constructor(private cartService:CartService , private http:HttpClient){}
cartData!:any;

ngOnInit(){
  this.cartService.getCartData().subscribe({
    next:(data:any)=>{
    this.cartData = data.cart.cartItems
    console.log(this.cartData)
    }
  })
}
}
