import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../features/services/auth/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink , RouterLinkActive , AsyncPipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  isloggedIn!:any;

  constructor(private authService: AuthService){
    this.isloggedIn= this.authService.isLoggedIn;
  }



  logout(){
    this.authService.logOut();
  }
}
