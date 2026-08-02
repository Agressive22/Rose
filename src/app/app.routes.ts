import { Routes } from '@angular/router';
import { HomeComponent } from './features/component/Home/home.component';
import { LoginComponent } from './features/component/login/login.component';
import { AllCategoryComponent } from './features/component/all-category/all-category.component';
import { ProductDetailsComponent } from './features/component/product-details/product-details.component';



export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'category',
    component:AllCategoryComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'products/:id',
    component:ProductDetailsComponent
  },

];
