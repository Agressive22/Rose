import { Routes } from '@angular/router';
import { HomeComponent } from './features/component/Home/home.component';
import { LoginComponent } from './features/component/login/login.component';
import { AllCategoryComponent } from './features/component/all-category/all-category.component';
import { ProductDetailsComponent } from './features/component/product-details/product-details.component';
import { authGuard } from '../guard/auth.guard';
import { CartComponent } from './features/component/Cart/cart.component';



export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'category',
    component:AllCategoryComponent,
    canActivate:[authGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[authGuard]
  },
  {
    path:'products/:id',
    component:ProductDetailsComponent
  },

];
