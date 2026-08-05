import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../features/services/auth/auth.service';
import { CartService } from '../../../features/services/cartService/cart.service';



@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  numberOfCartItems!:any;

  constructor(public authService: AuthService , private cartService:CartService){
  this.numberOfCartItems = this.cartService.count
  }

  ngOnInit() {
  this.cartService.getCartData().subscribe({
    next: (data: any) => {
      this.cartService.count.set(data.numOfCartItems);
    }
  });
  }
   openLogin(){
      this.authService.showLogIn.set(true)

    }

  logout(){
    this.authService.logOut();
  }


}
