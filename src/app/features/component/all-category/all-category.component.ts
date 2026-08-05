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
  catImages:any[] = []
  startIndex:number = 0;
  lastIndex:number = 9;
  pageSize = 9
  currentPage = 1

constructor(private cat:CategoryService , private router:Router , private prodcut:ProductsService , private authService:AuthService){}

ngOnInit(){

this.prodcut.getData().subscribe({
  next:(data:any)=>{
    this.allProducts = data.products
    this.filterProduct = data.products
    for(let product of this.filterProduct){
      product.isFavourite = false
    }

    console.log(this.filterProduct)
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

get totalPages(): number {
  return Math.ceil(this.filterProduct.length / this.pageSize);
}

get pages(): number[] {
  return Array.from({ length: this.totalPages }, (_, i) => i + 1);
}

goToPage(page: number) {

  this.currentPage = page;

  this.startIndex = (page - 1) * this.pageSize;
  this.lastIndex = this.startIndex + this.pageSize;

}

// next(){
//   if(this.lastIndex < this.filterProduct.length){
//    this.startIndex +=this.pageSize;
//    this.lastIndex += this.pageSize
//   }
// }

 next() {
  if (this.currentPage < this.totalPages) {
    this.goToPage(this.currentPage + 1);
  }
}

previous() {
  if (this.currentPage > 1) {
    this.goToPage(this.currentPage - 1);
  }
}

  // previous(){
  // if(this.startIndex >0){
  //  this.startIndex -=this.pageSize;
  //  this.lastIndex -=this.pageSize;
  // }
  // }
search(value: string) {

  if (!value.trim()) {
    this.filterProduct = this.allProducts;
    return;
  }

  this.filterProduct = this.allProducts.filter(product =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );

}
showDetails(id:any){
this.router.navigate(['/products',id])
}
changeColorHeart(product:any){

  product.isFavourite = !product.isFavourite
}

}
