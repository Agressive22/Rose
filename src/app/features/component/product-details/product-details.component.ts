import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/productService/products.service';
import { Product } from '../../interface/product';
import { CategoryService } from '../../services/category/category.service';
import { CartService } from '../../services/cartService/cart.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
constructor(private activate:ActivatedRoute , private productserive:ProductsService , private cartService:CartService , private authService:AuthService) {}

specificProduct! :Product;
selectedImage :string = ''
count:number = 1


ngOnInit(){

  const id  = this.activate.snapshot.paramMap.get('id')
  console.log(id)



  this.productserive.getSpecificProduct(id).subscribe({
    next:(data:any) => {
      this.specificProduct = data.product
      this.selectedImage = this.specificProduct.images[0]
    },
    error:(err)=>{
      console.log(err)
    }
  })



}

changeImage(image:string){
  this.selectedImage = image
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
  if(this.authService.isLogged()){
    this.cartService.addToCart(productId ,quntity).subscribe({
    next:(data:any)=>{
      console.log(data.numOfCartItems)
        this.cartService.count.set(data.numOfCartItems);
    },
    error:(err)=>{
      console.log(err)
    }
  })

  }
  else{
    this.authService.showLogIn.set(true)
  }
}




}
