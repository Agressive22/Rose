import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/productService/products.service';
import { Product } from '../../interface/product';
import { CategoryService } from '../../services/category/category.service';
import { CartService } from '../../services/cartService/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
constructor(private activate:ActivatedRoute , private productserive:ProductsService , private cartService:CartService) {}

specificProduct! :Product;
count:number = 1

ngOnInit(){

  const id  = this.activate.snapshot.paramMap.get('id')
  console.log(id)



  this.productserive.getSpecificProduct(id).subscribe({
    next:(data:any) => {
      this.specificProduct = data.product
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

increament(){
  if( this.count <this.specificProduct.quantity){
    this.count +=1
  }
}
decreament(){
if(this.count>1 ){
  this.count -=1
}
}

addToCart(productId:string , quntity:number){
  this.cartService.addToCart(productId ,quntity).subscribe({
    next:(data:any)=>{
      console.log(data)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

}

