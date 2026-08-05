import { Component } from '@angular/core';
import { Product } from '../../features/interface/product';
import { ProductsService } from '../../features/services/productService/products.service';

@Component({
  selector: 'app-certificate',
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  certiImages:any[] = []
  constructor(private prS:ProductsService){}
  ngOnInit(){
this.certiImages = this.prS.getCertiImages()

  }
}
