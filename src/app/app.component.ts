import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { FooterComponent } from './core/component/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rose';
}
