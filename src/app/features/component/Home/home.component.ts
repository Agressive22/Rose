import { Component } from '@angular/core';
import { ProductsService } from '../../services/productService/products.service';
import { Router } from '@angular/router';
import { Product } from '../../interface/product';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {




products:any[] = []


constructor(private prS:ProductsService , private router: Router){}
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


}
getId(id:any){
  this.router.navigate(['/products',id])
}
}
