import { Component } from '@angular/core';
import { ProductsService } from '../../services/productService/products.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
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


constructor(private prS:ProductsService , private router: Router , private authService:AuthService ){}
ngOnInit(){
    this.prS.getData().subscribe({
    next:(data:any)=>{
      this.products = data["products"]

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
  if(!this.authService.isLoggedIn){
     this.router.navigate(["/login"])
  }
  else{
    this.router.navigate(['/products',id])
  }
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


}

