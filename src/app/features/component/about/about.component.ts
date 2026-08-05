import { Component } from '@angular/core';
import { ItemsComponent } from '../../../shared/items/items.component';
import { ReviewsComponent } from '../../../shared/reviews/reviews.component';
import { CertificateComponent } from '../../../shared/certificate/certificate.component';
@Component({
  selector: 'app-about',
  imports: [ItemsComponent , ReviewsComponent , CertificateComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
