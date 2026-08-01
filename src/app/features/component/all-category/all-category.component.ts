import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-category',
  imports: [],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss'
})
export class AllCategoryComponent {
  allCategories :any[] = []
constructor(private cat:CategoryService){}

ngOnInit(){
  this.cat.getData().subscribe({
    next:(data:any)=> {
      this.allCategories = data.categories
    },
    error:err => {
      console.log(err)
    }



})
}
}
