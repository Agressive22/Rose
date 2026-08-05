import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { AuthService } from './features/services/auth/auth.service';
import { LoginComponent } from './features/component/login/login.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent , LoginComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public authService:AuthService){}
}
