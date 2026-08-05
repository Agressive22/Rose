import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { AuthService } from './features/services/auth/auth.service';
import { LoginComponent } from './features/component/login/login.component';
import { SpinnerComponent } from './shared/component/spinner/spinner/spinner.component';
import { LoadingService } from './features/services/loading/loading.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent , LoginComponent, FooterComponent , SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public authService:AuthService , public loadingService:LoadingService){
  }
}
