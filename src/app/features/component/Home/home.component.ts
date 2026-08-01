import { Component } from '@angular/core';
import { ProductsService } from '../../services/productService/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

itemImages = [
  'images/item1.png',
  'images/item2.png',
  'images/item3.png',
  'images/item4.png',
  'images/item5.png',
  'images/item6.png',
  'images/item7.png',
  'images/item8.png',
  'images/item9.png',
  'images/item10.png',
  'images/item11.png',
  'images/item12.png',
]



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
