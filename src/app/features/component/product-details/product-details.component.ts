import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/productService/products.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
constructor(private activate:ActivatedRoute , private productserive:ProductsService){}

specificProduct! :Product;

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

}

