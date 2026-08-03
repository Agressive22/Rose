import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/productService/products.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-all-category',
  imports: [],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss'
})
export class AllCategoryComponent {
  allCategories :any[] = []
  categoryCount:any = []
  allProducts:any[] = []
  filterProduct:any[] = []
  startIndex:number = 0;
  lastIndex:number = 9;
  pageSize = 9
  check!:boolean

constructor(private cat:CategoryService , private router:Router , private prodcut:ProductsService , private authService:AuthService){}

ngOnInit(){

this.prodcut.getData().subscribe({
  next:(data:any)=>{
    this.allProducts = data.products
    this.filterProduct = data.products
  }
})

this.cat.getCategoryProductCount().subscribe({
  next:(data:any)=>{
    this.categoryCount = data.categoryProductCount
  }
})
}


getId(catId:any){
 this.filterProduct = this.allProducts.filter((product:any)=>{
  return product.category === catId
 })
}
sendId(id:any){
this.router.navigate(['products/',id])
}
next(){
  if(this.lastIndex < this.filterProduct.length){
   this.startIndex +=this.pageSize;
   this.lastIndex += this.pageSize
  }
}

  previous(){
  if(this.startIndex >0){
   this.startIndex -=this.pageSize;
   this.lastIndex -=this.pageSize;
  }
  }
  navigation(id:any){
  if(this.authService.isLoggedIn){
    this.router.navigate(["/products",id])
  }
  else{
    this.router.navigate(["/login"])
  }
  }

}
