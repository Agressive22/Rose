import { Component } from '@angular/core';
import { OwlOptions , CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-reviews',
  imports: [CarouselModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  customOptions: OwlOptions = {

    loop: true,

    items: 2,

    // margin: 10,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,

    nav: true,
    dots: true,

    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    // slideBy: 3,

    navSpeed: 700,

    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },

      768: {
        items: 2,
        slideBy: 2
      },

      1024: {
        items: 4,
        slideBy: 4
      }
    }

  };
}
