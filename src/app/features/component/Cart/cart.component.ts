import { Component } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service';


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
constructor(private cartService:CartService ){}
cartData!:any;

ngOnInit(){
  this.cartService.getCartData().subscribe({
    next:(data:any)=>{
    this.cartData = data.cart.cartItems
    }
  })
}

deleteItem(productId:any){
  console.log(productId)
this.cartService.deleteItem(productId).subscribe({
  next:(data:any)=>{

  this.cartData = data.cart.cartItems
    this.cartService.count.set(data.numOfCartItems)
    console.log(data)
  },
  error:(err)=>{
    console.log(err)
  }
})
}
}
