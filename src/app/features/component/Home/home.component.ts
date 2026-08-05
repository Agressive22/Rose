import { Component } from '@angular/core';
import { ProductsService } from '../../services/productService/products.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

products:any[] = []
currnetIndex = 1;
giftImages:string[] = []
premiumGiftImages:string[] = []
itemImages:string[]=[]
certiImages:string[] = [];
image:string = "/images/gift2.jpg";


constructor(private prS:ProductsService , private router: Router , public authService:AuthService ){


}
ngOnInit(){
    this.prS.getData().subscribe({
    next:(data:any)=>{
      this.products = data["products"]
      for(let product of this.products){
        product.isFavourite = false
      }

    },
    error(err) {
      console.log(err)
    },
    complete(){
      console.log("finished");
    }
  });

this.giftImages = this.prS.getGiftImages()
this.premiumGiftImages = this.prS.getPremiumImages()
this.itemImages = this.prS.getItemImages()
this.certiImages = this.prS.getCertiImages()

}
getId(id:any){
  this.router.navigate(['/products',id])
}
buyProduct(id:any){
    this.router.navigate(['/products',id])
}

next(){
if(this.currnetIndex < this.giftImages.length-1){
  this.currnetIndex++;
  this.image = this.giftImages[this.currnetIndex]
  console.log("ww")

}
}
previous() {
if(this.currnetIndex >0 ){
  this.currnetIndex--;
  this.image = this.giftImages[this.currnetIndex]
}
}
changeColorHeart(product:any){
 product.isFavourite = !product.isFavourite

}


}

