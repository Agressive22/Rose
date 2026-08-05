import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../features/services/auth/auth.service';
import { ProductsService } from '../../features/services/productService/products.service';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  products:any[]=[]
  constructor(private router:Router , private prS:ProductsService){}

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
}
getId(id:any){
  this.router.navigate(["/product",id])
}
}



